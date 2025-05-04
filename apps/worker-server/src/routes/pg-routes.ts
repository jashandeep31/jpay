import Router from "express";
import { createPGPaymentLink } from "../controllers/pg-controller.js";
const router = Router();

router.route("/").post(createPGPaymentLink);

export default router;
