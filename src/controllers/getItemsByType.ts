import { Request, Response } from "express";
import products from "../../data/products.json";

const getItemsByType = (req: Request, res: Response) => {
    const result = products.filter((el) => {
        return el.type === req.params.type;
    });
    
    res.json(result);
}

export default getItemsByType;