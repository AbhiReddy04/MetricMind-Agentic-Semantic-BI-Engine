const { getAIResponse } = require("./ai.service");

const { successResponse } = require("../utils/response");

const processQuestion = async (question) => {
    const aiResponse = await getAIResponse(question);

    return successResponse({
        receivedQuestion: question,
        aiResponse
    });
};

module.exports = {
    processQuestion
};