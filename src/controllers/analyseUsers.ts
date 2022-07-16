import { Request, Response } from "express";
import products from "../../data/products.json";
import orders from "../../data/orders.json";
import users from "../../data/users.json";
import sales from "../../data/sales.json";

interface ordersByUser {
    [key: string]: Array<number>
}

interface totalPrice {
    [key: string]: number
}

const analyseUsers = (req: Request, res: Response) => {
    let maxTotalPriceId = undefined;
    let minBuyCount = undefined;
    const minBuyer: Array<string> = [];
    const ordersByUser: ordersByUser = {};
    const totalPriceByOrder: totalPrice = {};
    const totalPriceByUser: totalPrice = {};

    for(let i of orders) {
        if(!(i.userId in ordersByUser)) {
            ordersByUser[i.userId] = [];
        }
        ordersByUser[i.userId].push(i.id);
    }

    for(let key in ordersByUser) {
        if(minBuyCount === undefined) {
            minBuyCount = ordersByUser[key].length;
        }
        if(ordersByUser[minBuyCount].length > ordersByUser[key].length) {
            minBuyCount = ordersByUser[key].length;
        }
    }

    for(let key in ordersByUser) {
        if(ordersByUser[key].length === minBuyCount) {
            minBuyer.push(users[Number(key) - 1].name);
        }
    }

    for(let i of sales) {
        if(!(i.orderId in totalPriceByOrder)) {
            totalPriceByOrder[i.orderId] = 0;
        }
        totalPriceByOrder[i.orderId] += products[i.productId - 1].price;
    }

    for(let key in ordersByUser) {
        totalPriceByUser[key] = ordersByUser[key].reduce((sum, nextKey) => {
            return sum += totalPriceByOrder[nextKey];
        }, 0);
    }

    for(let key in totalPriceByUser) {
        if(maxTotalPriceId === undefined) {
            maxTotalPriceId = key;
        }
        if(totalPriceByUser[maxTotalPriceId] < totalPriceByUser[key]) {
            maxTotalPriceId = key;
        }
    }

    const topBuyer = users[Number(maxTotalPriceId) - 1].name;

    if(minBuyer.includes(topBuyer)) {
        res.send(topBuyer);
    } else {
        res.json({ "구매 횟수가 가장 적은 회원" : minBuyer, "구매 총액이 가장 높은 회원" : topBuyer });
    }
}



export default analyseUsers;