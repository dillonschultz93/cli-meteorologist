"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const fetch = require('node-fetch');
const chalk = require('chalk');
exports.getLocation = (address) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_API}&q=${encodeURIComponent(address).trim()}&format=json`);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = yield response.json();
        return data;
    }
    catch (error) {
        console.log(chalk.red(`${error}`));
    }
});
