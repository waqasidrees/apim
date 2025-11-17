const express = require("express");
const app = express();

app.use(express.json());

// Health check endpoint
app.get("/", (req, res) => {
    res.send("Hello from Azure Container App Test API!");
});

// Example GET endpoint
app.get("/api/test", (req, res) => {
    res.json({
        status: "success",
        message: "API is working fine!",
        timestamp: new Date()
    });
});

// Example POST endpoint
app.post("/api/echo", (req, res) => {
    res.json({
        status: "received",
        body: req.body
    });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
