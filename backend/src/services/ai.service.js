// Replace the mock response with an API call to the LangChain service.

const getAIResponse = async (question) => {
    return "Mock AI response";
};

module.exports = {
    getAIResponse
};