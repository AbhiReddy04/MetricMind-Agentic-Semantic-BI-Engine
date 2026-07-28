const { processQuestion } = require("../services/chat.service");

const handleChat = async (req, res) => {
    try {
        const { question } = req.body;

        const response = await processQuestion(question);

        res.json(response);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = {
    handleChat
};