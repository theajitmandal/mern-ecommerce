// this can be made in same product routes also

import express from "express";
import { postOrder } from "../controllers/orderController";
const router = express.Router();

router.post("/postorder", postOrder)


export default router;