const express = require("express");

const {
    registerCustomer,
    loginCustomer,
} = require("../customer.controller");

const validateChatRequest = require("../middleware/validateChatRequest");
const { handleChat } = require("../controllers/chat.controller");

const {
    getCustomerCount,
    getTotalSalesRevenue,
    getOrderCount,
    getProductCount,
    getMonthlySales,
    getSalesByCategory,
    getRecentOrders,
    getRecentCustomers,
} = require("../services/data.service");

const router = express.Router();

// =========================
// Home
// =========================
router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "MetricMind Backend Running 🚀",
    });
});

// =========================
// Health
// =========================
router.get("/health", (req, res) => {
    res.json({
        status: "OK",
        message: "Backend is healthy",
    });
});

// =========================
// Customer Registration
// =========================
router.post("/register", registerCustomer);

// =========================
// Customer Login
// =========================
router.post("/login", loginCustomer);

// =========================
// Dashboard
// =========================
router.get("/dashboard", async (req, res) => {
    try {
        const [
    customers,
    revenue,
    orders,
    products,
    monthlySales,
    salesByCategory,
    recentOrders,
    recentCustomers,
] = await Promise.all([
    getCustomerCount(),
    getTotalSalesRevenue(),
    getOrderCount(),
    getProductCount(),
    getMonthlySales(),
    getSalesByCategory(),
    getRecentOrders(),
    getRecentCustomers(),
]);

        res.json({
    success: true,
    data: {
        customers,
        revenue,
        orders,
        products,
        monthlySales,
        salesByCategory,
        recentOrders,
        recentCustomers,
    },
});
    } catch (error) {
        console.error("Dashboard API Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to load dashboard data",
            error: error.message,
        });
    }
});

// =========================
// AI Chat
// =========================
router.post(
    "/chat",
    validateChatRequest,
    handleChat
);

module.exports = router;