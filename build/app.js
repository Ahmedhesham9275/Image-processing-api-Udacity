"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var mainRoute_1 = __importDefault(require("./routes/mainRoute"));
var app = (0, express_1.default)();
var image = '/image';
app.use(image, mainRoute_1.default);
//middleware to serve static file => render the images folder
app.use(image, express_1.default.static(path_1.default.join(__dirname, 'images')));
exports.default = app;
