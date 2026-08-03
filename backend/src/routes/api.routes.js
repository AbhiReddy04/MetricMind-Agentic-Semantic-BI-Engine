const express = require("express");

const validateChatRequest = require("../middleware/validateChatRequest");
const { handleChat } = require("../controllers/chat.controller");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("MetricMind Backend Running 🚀");
});

router.get("/health", (req, res) => {
    res.json({
        status: "OK",
        message: "Backend is healthy"
    });
});

router.post("/chat", validateChatRequest, handleChat);

module.exports = router;