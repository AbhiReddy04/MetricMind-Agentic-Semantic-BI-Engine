const MESSAGES = require("../utils/messages");
const { successResponse, errorResponse } = require("../utils/response");

const processQuestion = (question) => {
    if (!question) {
        return errorResponse(MESSAGES.QUESTION_REQUIRED);
    }

    return successResponse({
        receivedQuestion: question
    });
};

module.exports = {
    processQuestion
};