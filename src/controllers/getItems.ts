import { Request, Response } from "express";
import products from "../../data/products.json";

const getItems = (req: Request, res: Response) => {
    res.json(products);
}

export default getItems;