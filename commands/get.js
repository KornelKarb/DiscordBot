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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
exports.default = {
    category: "Api",
    description: "F1",
    permissions: ["ADMINISTRATOR"],
    maxArgs: 1,
    expectedArgs: "<id>",
    expectedArgsTypes: ["NUMBER"],
    slash: "both",
    testOnly: true,
    callback: ({ args }) => __awaiter(void 0, void 0, void 0, function* () {
        let uri = "https://f1-live-motorsport-data.p.rapidapi.com/drivers/2020";
        const { data } = yield axios_1.default.get(uri);
        console.log(data);
    }),
};
