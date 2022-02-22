"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var primaryImage_1 = __importDefault(require("./route/primaryImage"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.send('pleas add the params {imageName&&W&&H}');
});
routes.use('/processing', primaryImage_1.default);
exports.default = routes;
