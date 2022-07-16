import express from "express";
import getItems from "../controllers/getItems";
import getItemsByType from "../controllers/getItemsByType";
import getRandomItems from "../controllers/getRandomItems";
import getBestSales from "../controllers/getBestSales";
import getPopularityItem from "../controllers/getPopularityItem";
import analyseUsers from "../controllers/analyseUsers";

const router = express.Router();

router.get("/", getItems);
router.get("/item/:type", getItemsByType);
router.get("/randomItems", getRandomItems);
router.get("/bestsales", getBestSales);
router.get("/popularity", getPopularityItem);
router.get("/analysis", analyseUsers);

export default router;