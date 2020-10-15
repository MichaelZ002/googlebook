const path =require("path");
const router = require("express").Router();
const apiRoutes = require ("./api");
const { model } = require("mongoose");

router.use("/api", apiRoutes);

mmodule.exports = router;