const express = require("express");
const router = express.Router();
const visitors = require("../../controllers/visitors.controller");
const auth = require("../../middlewares/auth");

router.get("/", visitors.getAll);
router.get("/monthly", visitors.getMonthly);
router.get("/weekly", visitors.getWeekly);
router.get("/:id", visitors.getByID);
router.post("/", auth, visitors.post);

module.exports = router;
