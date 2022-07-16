import { Request, Response } from "express";
import products from "../../data/products.json";
import sales from "../../data/sales.json";

interface salesCount {
    [key: string]: number
}

const getPopularityItem = (req: Request, res: Response) => {
    let bestPopularityId = undefined;
    const salesCount: salesCount = {};

    const result = sales.filter((el) => {
        return el.orderedAt.includes("2022-03");
    });

    for(let i of result) {
        if(!(i.productId in salesCount)) {
            salesCount[i.productId] = 0;
        }
        salesCount[i.productId]++;
    }

    for(let key in salesCount) {
        salesCount[key] = salesCount[key] * products[Number(key) - 1].price;

        if(bestPopularityId === undefined) {
            bestPopularityId = key;
        }

        if(salesCount[bestPopularityId] < salesCount[key]) {
            bestPopularityId = key;
        }
    }
    
    res.json(products[Number(bestPopularityId) - 1]);
}

export default getPopularityItem;