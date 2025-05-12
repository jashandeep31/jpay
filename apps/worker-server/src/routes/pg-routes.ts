import Router from "express";
import {
  createPGPaymentLink,
  getPGpayment,
} from "../controllers/pg-controller.js";
const router = Router();

router.route("/").post(createPGPaymentLink);
router.route("/:paymentUID").post(getPGpayment);

export default router;
