import { Request, Response } from "express";
import products from "../../data/products.json";
import orders from "../../data/orders.json";
import sales from "../../data/sales.json";
import users from "../../data/users.json";

interface count {
    [key: string] : number
}

const getBestSales = (req: Request, res: Response) => {
    const result = [];
    let maxSell = undefined;
    const count: count = {};
    const femaleUsers: number[] = [];
    const orderByFemale: number[] =[];
    
    for(let i of users) {
        if(i.gender === "female") {
            femaleUsers.push(i.id);
        }
    }
    
    for(let i of orders) {
        if(femaleUsers.includes(i.userId)) {
            orderByFemale.push(i.id);
        }
    }

    const femaleSales = sales.filter((sale) => {
        return orderByFemale.includes(sale.orderId);
    });

    for(let i of femaleSales) {
        if(!(i.productId in count)) {
            count[i.productId] = 0;
        }
        count[i.productId]++;
    }

    for(let key in count) {
        if(maxSell === undefined) {
            maxSell = count[key];
        }
        if(count[maxSell] < count[key]) {
            maxSell = count[key];
        }
    }

    for(let key in count) {
        if(count[key] === maxSell) {
            result.push(products[Number(key) - 1].name);
        }
    }

    res.send(result);
}

export default getBestSales