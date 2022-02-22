"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var port = process.env.port || 3000;
app_1.default.get('/', function (req, res) {
    res.send('To view Images with full size try the following link "http://localhost:3000/image/{imagename}"   &&   To view Images after Reshaped size try the following link and change the query params "http://localhost:3000/image/Reshaped/icelandwaterfall100x300.jpg"    ||    To Reshaping images follow this link and modifiy params "http://localhost:3000/image/processing?imageName=&&W=&&H="');
});
app_1.default.listen(port, function () {
    console.log("server started at localhost:".concat(port));
});
