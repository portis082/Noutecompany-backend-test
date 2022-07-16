import { Request, Response } from "express";
import products from "../../data/products.json";

interface typeItem {
    [key: string]: object
}

const getRandomItems = (req: Request, res: Response) => {
    const result: typeItem = {};
    const type = ["diary", "note", "sticker", "brush"];
    
    for(let i of type) {
        const array = products.filter((el) => {
            return el.type === i;
        })

        const ranNum = Math.floor(Math.random() * array.length);
        result[i] = array[ranNum];
    }

    res.json(result);
}

export default getRandomItems;
