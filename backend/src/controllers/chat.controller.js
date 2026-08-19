const { processQuestion } = require("../services/chat.service");

const handleChat = async (req, res) => {
    try {
        const { question } = req.body;

        const response = await processQuestion(question);

        res.json(response);
    } catch (error) {
        console.error("CHAT ERROR:", error);

        res.status(500).json({
            success: false,
            message: "Chat failed",
            error: error.message,
        });
    }
};

module.exports = {
    handleChat,
};