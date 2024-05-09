// module imports
import express from "express";

// file imports
import { getData, setData } from "../controllers/testController";

// variable initializations
const router = express.Router();

router.route('/').get(getData).post(setData);

export default router;
