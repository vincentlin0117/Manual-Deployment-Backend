const express = require('express');
const app = express();
const logger = require("./util/logger");
const userController = require("./controller/userController");
const {authenticateToken} = require("./util/jwt");
const cors = require("cors")
// const session = require("express-session");

const PORT = 3000;
app.use(cors())
app.use(express.json());

app.use(loggerMiddleware);

app.use("/users", userController);

function loggerMiddleware(req, res, next){
    logger.info(`Incoming ${req.method} : ${req.url}`);
    next();
}

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/protected", authenticateToken, (req, res) => {
    res.status(200).json({message: "Accessed Protected Route", user: req.user});
})

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})