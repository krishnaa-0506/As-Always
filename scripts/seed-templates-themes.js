"use strict";
// Load environment variables
require('dotenv').config();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("../lib/db/mongodb");
var templates_1 = require("../lib/data/templates");
var themes_1 = require("../lib/data/themes");
function seedTemplatesAndThemes() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, defaultTemplates_1, template, _a, defaultThemes_1, theme, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 11, , 12]);
                    console.log('Starting database seeding...');
                    // Clear existing templates and themes
                    console.log('Clearing existing data...');
                    return [4 /*yield*/, mongodb_1.dbService.clearTemplates()];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, mongodb_1.dbService.clearThemes()];
                case 2:
                    _b.sent();
                    // Seed templates
                    console.log('Seeding templates...');
                    _i = 0, defaultTemplates_1 = templates_1.defaultTemplates;
                    _b.label = 3;
                case 3:
                    if (!(_i < defaultTemplates_1.length)) return [3 /*break*/, 6];
                    template = defaultTemplates_1[_i];
                    return [4 /*yield*/, mongodb_1.dbService.createTemplate(__assign(__assign({}, template), { isActive: true, createdAt: new Date() }))];
                case 4:
                    _b.sent();
                    _b.label = 5;
                case 5:
                    _i++;
                    return [3 /*break*/, 3];
                case 6:
                    console.log("Seeded ".concat(templates_1.defaultTemplates.length, " templates"));
                    // Seed themes
                    console.log('Seeding themes...');
                    _a = 0, defaultThemes_1 = themes_1.defaultThemes;
                    _b.label = 7;
                case 7:
                    if (!(_a < defaultThemes_1.length)) return [3 /*break*/, 10];
                    theme = defaultThemes_1[_a];
                    return [4 /*yield*/, mongodb_1.dbService.createTheme(__assign(__assign({}, theme), { isActive: true, createdAt: new Date() }))];
                case 8:
                    _b.sent();
                    _b.label = 9;
                case 9:
                    _a++;
                    return [3 /*break*/, 7];
                case 10:
                    console.log("Seeded ".concat(themes_1.defaultThemes.length, " themes"));
                    console.log('Database seeding completed successfully!');
                    process.exit(0);
                    return [3 /*break*/, 12];
                case 11:
                    error_1 = _b.sent();
                    console.error('Error seeding database:', error_1);
                    process.exit(1);
                    return [3 /*break*/, 12];
                case 12: return [2 /*return*/];
            }
        });
    });
}
seedTemplatesAndThemes();
