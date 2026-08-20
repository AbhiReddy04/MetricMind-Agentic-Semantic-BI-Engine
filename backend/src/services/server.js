require("dotenv").config();

const app = require("./src/app");

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});

server.on("error", (error) => {
    console.error("Server Error:", error);
});