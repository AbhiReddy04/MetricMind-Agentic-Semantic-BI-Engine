const MESSAGES = require("../utils/messages");
const { successResponse, errorResponse } = require("../utils/response");

const processQuestion = async (question) => {

    return successResponse({
        receivedQuestion: question,
        aiResponse: "Mock AI response"
    });
};

module.exports = {
    processQuestion
};