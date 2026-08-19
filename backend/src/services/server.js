require("dotenv").config();

const app = require("./src/app");

const PORT = 5000;

const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});

// Keep server process alive
setInterval(() => {
    // server is running
}, 1000);

server.on("error", (error) => {
    console.error("Server Error:", error);
});