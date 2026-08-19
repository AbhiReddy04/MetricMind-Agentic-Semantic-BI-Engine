const { getAIResponse } = require("./ai.service");

const {
    getCustomerCount,
    getTopProductsBySales,
    getTotalSalesRevenue,
} = require("./data.service");

const { successResponse } = require("../utils/response");

const processQuestion = async (question) => {
    const lowerQuestion = question.toLowerCase();

    // Customer count
    if (
        lowerQuestion.includes("how many customers") ||
        lowerQuestion.includes("customer count") ||
        lowerQuestion.includes("number of customers")
    ) {
        const count = await getCustomerCount();

        return successResponse({
            receivedQuestion: question,
            aiResponse: `There are ${count} customers in the dataset.`,
        });
    }

    // Total sales revenue
    if (
        lowerQuestion.includes("total sales revenue") ||
        lowerQuestion.includes("total revenue") ||
        lowerQuestion.includes("total sales")
    ) {
        const totalRevenue = await getTotalSalesRevenue();

        return successResponse({
            receivedQuestion: question,
            aiResponse: `The total sales revenue is ₹${totalRevenue.toFixed(2)}.`,
        });
    }

    // Top 5 products by sales
    if (
        lowerQuestion.includes("top 5 products") ||
        lowerQuestion.includes("top five products") ||
        lowerQuestion.includes("best selling products")
    ) {
        const products = await getTopProductsBySales();

        const formattedProducts = products
            .map(
                (product, index) =>
                    `${index + 1}. ${product.productId} - ${product.category} - ₹${product.totalSales.toFixed(2)}`
            )
            .join("\n");

        return successResponse({
            receivedQuestion: question,
            aiResponse: `Top 5 products by sales:\n\n${formattedProducts}`,
        });
    }

    // Other questions → Gemini
    const aiResponse = await getAIResponse(question);

    return successResponse({
        receivedQuestion: question,
        aiResponse,
    });
};

module.exports = {
    processQuestion,
};