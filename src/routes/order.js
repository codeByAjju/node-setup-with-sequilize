import express from "express";
import controllers from "../controllers";

const {orderController} = controllers;
const router = express.Router();

router.post("/save-order",orderController.saveOrder);
export default router;