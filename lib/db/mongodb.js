"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbService = exports.DatabaseService = void 0;
var mongodb_1 = require("mongodb");
var sanitizer_1 = require("../security/sanitizer");
// Force TLS 1.2 for MongoDB connections
process.env.MONGODB_TLS_ALLOW_INVALID_CERTIFICATES = process.env.NODE_ENV === 'development' ? 'true' : 'false';
process.env.MONGODB_TLS_VERSION = 'TLSv1_2';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = process.env.NODE_ENV === 'development' ? '0' : '1';
var uri = process.env.MONGODB_URI;
if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable');
}
var options = {
    serverApi: { version: '1', strict: true, deprecationErrors: true },
    maxPoolSize: 5,
    minPoolSize: 1,
    connectTimeoutMS: 60000,
    serverSelectionTimeoutMS: 60000,
    socketTimeoutMS: 60000,
    heartbeatFrequencyMS: 30000,
    directConnection: false,
    tls: true,
    tlsAllowInvalidCertificates: process.env.NODE_ENV === 'development',
    retryWrites: true,
    w: 'majority',
    retryReads: true,
    compressors: ['none'],
};
var client;
var clientPromise;
if (process.env.NODE_ENV === 'development') {
    var globalWithMongo = global;
    if (!globalWithMongo._mongoClientPromise) {
        client = new mongodb_1.MongoClient(uri, options);
        globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
}
else {
    client = new mongodb_1.MongoClient(uri, options);
    clientPromise = client.connect();
}
exports.default = clientPromise;
// Type casting helpers
function castToType(doc) {
    if (!doc)
        return null;
    var _id = doc._id, rest = __rest(doc, ["_id"]);
    var converted = __assign(__assign({}, rest), { _id: _id.toString() });
    return converted;
}
function castToTypeArray(docs) {
    return docs.map(function (doc) {
        var _id = doc._id, rest = __rest(doc, ["_id"]);
        var converted = __assign(__assign({}, rest), { _id: _id.toString() });
        return converted;
    });
}
function toObjectId(id) {
    if (!sanitizer_1.SecuritySanitizer.validateObjectId(id))
        return null;
    try {
        return new mongodb_1.ObjectId(id);
    }
    catch (_a) {
        return null;
    }
}
function getDatabase() {
    return __awaiter(this, void 0, void 0, function () {
        var client_1, db, error_1, errorMessage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, clientPromise];
                case 1:
                    client_1 = _a.sent();
                    db = client_1.db('asalways');
                    // Simple ping to check connection
                    return [4 /*yield*/, db.command({ ping: 1 })];
                case 2:
                    // Simple ping to check connection
                    _a.sent();
                    console.log('Successfully connected to MongoDB Atlas');
                    return [2 /*return*/, db];
                case 3:
                    error_1 = _a.sent();
                    errorMessage = (error_1 === null || error_1 === void 0 ? void 0 : error_1.message) || error_1;
                    console.error('MongoDB connection failed:', {
                        message: errorMessage,
                        code: error_1 === null || error_1 === void 0 ? void 0 : error_1.code,
                        name: error_1 === null || error_1 === void 0 ? void 0 : error_1.name
                    });
                    // Provide more specific error messages based on the error type
                    if ((errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.includes('SSL')) || (errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.includes('TLS'))) {
                        console.error('TLS Details:', {
                            tlsVersion: process.versions.tls,
                            openSSLVersion: process.versions.openssl,
                            nodeVersion: process.version
                        });
                        throw new Error("MongoDB TLS connection failed (".concat((error_1 === null || error_1 === void 0 ? void 0 : error_1.code) || 'unknown', "). Check network security and MongoDB Atlas access settings."));
                    }
                    else if (errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.includes('Authentication failed')) {
                        throw new Error('MongoDB authentication failed. Please check your username and password.');
                    }
                    else if (errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.includes('getaddrinfo')) {
                        throw new Error('Could not resolve MongoDB hostname. Please check your network connection and DNS settings.');
                    }
                    else if (errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.includes('timeout')) {
                        throw new Error('MongoDB connection timed out. Please check your network connection and firewall settings.');
                    }
                    throw new Error("Database connection failed: ".concat(errorMessage));
                case 4: return [2 /*return*/];
            }
        });
    });
}
var DatabaseService = /** @class */ (function () {
    function DatabaseService() {
        this.db = null;
    }
    DatabaseService.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var retries, _a, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.db) return [3 /*break*/, 7];
                        retries = 3;
                        _b.label = 1;
                    case 1:
                        if (!(retries > 0)) return [3 /*break*/, 7];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 6]);
                        _a = this;
                        return [4 /*yield*/, getDatabase()];
                    case 3:
                        _a.db = _b.sent();
                        console.log('MongoDB connected successfully');
                        return [3 /*break*/, 7];
                    case 4:
                        error_2 = _b.sent();
                        console.error("MongoDB connection attempt failed. Retries left: ".concat(retries - 1), error_2);
                        retries--;
                        if (retries === 0) {
                            console.error('Failed to connect to MongoDB after 3 attempts');
                            throw new Error('MongoDB connection failed');
                        }
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 6: return [3 /*break*/, 1];
                    case 7: return [2 /*return*/, this.db];
                }
            });
        });
    };
    // User operations
    DatabaseService.prototype.createUser = function (userData) {
        return __awaiter(this, void 0, void 0, function () {
            var db, now, sanitizedData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        db = _a.sent();
                        now = new Date();
                        sanitizedData = __assign(__assign({}, userData), { email: userData.email ? sanitizer_1.SecuritySanitizer.sanitizeString(userData.email.toLowerCase()) : undefined, name: userData.name ? sanitizer_1.SecuritySanitizer.sanitizeString(userData.name) : undefined, role: userData.role, password: userData.password, createdAt: now, updatedAt: now, _id: new mongodb_1.ObjectId() });
                        return [4 /*yield*/, db.collection('users').insertOne(sanitizedData)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, castToType(sanitizedData)];
                }
            });
        });
    };
    DatabaseService.prototype.findUserByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var db, sanitizedEmail, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        db = _a.sent();
                        sanitizedEmail = sanitizer_1.SecuritySanitizer.sanitizeString(email.toLowerCase());
                        return [4 /*yield*/, db.collection('users').findOne({
                                email: sanitizedEmail
                            })];
                    case 2:
                        user = _a.sent();
                        return [2 /*return*/, castToType(user)];
                }
            });
        });
    };
    DatabaseService.prototype.findUserById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var objectId, db, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        objectId = toObjectId(id);
                        if (!objectId)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, this.connect()];
                    case 1:
                        db = _a.sent();
                        return [4 /*yield*/, db.collection('users').findOne({ _id: objectId })];
                    case 2:
                        user = _a.sent();
                        return [2 /*return*/, castToType(user)];
                }
            });
        });
    };
    DatabaseService.prototype.updateUserPassword = function (email, hashedPassword) {
        return __awaiter(this, void 0, void 0, function () {
            var db, sanitizedEmail;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        db = _a.sent();
                        sanitizedEmail = sanitizer_1.SecuritySanitizer.sanitizeString(email.toLowerCase());
                        return [4 /*yield*/, db.collection('users').updateOne({ email: sanitizedEmail }, { $set: { password: hashedPassword, updatedAt: new Date() } })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DatabaseService.prototype.updateUser = function (id, updateData) {
        return __awaiter(this, void 0, void 0, function () {
            var objectId, db, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        objectId = toObjectId(id);
                        if (!objectId)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, this.connect()];
                    case 1:
                        db = _a.sent();
                        return [4 /*yield*/, db.collection('users').findOneAndUpdate({ _id: objectId }, { $set: __assign(__assign({}, updateData), { updatedAt: new Date() }) }, { returnDocument: 'after' })];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result ? castToType(result) : null];
                }
            });
        });
    };
    // Message operations
    DatabaseService.prototype.createMessage = function (messageData) {
        return __awaiter(this, void 0, void 0, function () {
            var db, now, sanitizedData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        db = _a.sent();
                        now = new Date();
                        sanitizedData = {
                            code: sanitizer_1.SecuritySanitizer.sanitizeString(messageData.code),
                            senderName: sanitizer_1.SecuritySanitizer.sanitizeString(messageData.senderName),
                            receiverName: sanitizer_1.SecuritySanitizer.sanitizeString(messageData.receiverName),
                            relationship: sanitizer_1.SecuritySanitizer.sanitizeString(messageData.relationship),
                            receiverGender: sanitizer_1.SecuritySanitizer.sanitizeString(messageData.receiverGender),
                            status: messageData.status || 'CREATED', // Enum value, no need to sanitize
                            emotionTag: messageData.emotionTag ? sanitizer_1.SecuritySanitizer.sanitizeString(messageData.emotionTag) : undefined,
                            selectedSong: messageData.selectedSong ? sanitizer_1.SecuritySanitizer.sanitizeString(messageData.selectedSong) : undefined,
                            voiceNote: messageData.voiceNote ? sanitizer_1.SecuritySanitizer.sanitizeString(messageData.voiceNote) : undefined,
                            textContent: messageData.textContent ? sanitizer_1.SecuritySanitizer.sanitizeString(messageData.textContent) : undefined,
                            isViewed: false,
                            senderId: messageData.senderId ? sanitizer_1.SecuritySanitizer.sanitizeString(messageData.senderId) : undefined,
                            receiverId: messageData.receiverId ? sanitizer_1.SecuritySanitizer.sanitizeString(messageData.receiverId) : undefined,
                            memories: [],
                            screens: [],
                            reactions: [],
                            createdAt: now,
                            updatedAt: now,
                            _id: new mongodb_1.ObjectId()
                        };
                        // Validate required fields
                        if (!sanitizedData.code || !sanitizedData.senderName || !sanitizedData.receiverName) {
                            throw new Error('Missing required fields');
                        }
                        return [4 /*yield*/, db.collection('messages').insertOne(sanitizedData)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, castToType(sanitizedData)];
                }
            });
        });
    };
    DatabaseService.prototype.findMessageByCode = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var db, sanitizedCode, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        db = _a.sent();
                        sanitizedCode = sanitizer_1.SecuritySanitizer.sanitizeString(code);
                        return [4 /*yield*/, db.collection('messages').findOne({ code: sanitizedCode })];
                    case 2:
                        message = _a.sent();
                        return [2 /*return*/, castToType(message)];
                }
            });
        });
    };
    DatabaseService.prototype.updateMessage = function (id, updateData) {
        return __awaiter(this, void 0, void 0, function () {
            var objectId, db, sanitizedData, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        objectId = toObjectId(id);
                        if (!objectId)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, this.connect()];
                    case 1:
                        db = _a.sent();
                        sanitizedData = sanitizer_1.SecuritySanitizer.sanitizeObject(updateData);
                        return [4 /*yield*/, db.collection('messages').findOneAndUpdate({ _id: objectId }, { $set: __assign(__assign({}, sanitizedData), { updatedAt: new Date() }) }, { returnDocument: 'after' })];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result ? castToType(result) : null];
                }
            });
        });
    };
    DatabaseService.prototype.getMessages = function (userId_1) {
        return __awaiter(this, arguments, void 0, function (userId, limit, offset) {
            var db, query, _a, messages, total;
            if (limit === void 0) { limit = 10; }
            if (offset === void 0) { offset = 0; }
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        db = _b.sent();
                        query = {};
                        if (userId) {
                            if (!sanitizer_1.SecuritySanitizer.validateObjectId(userId)) {
                                throw new Error('Invalid user ID');
                            }
                            query = {
                                $or: [
                                    { senderId: userId },
                                    { receiverId: userId }
                                ]
                            };
                        }
                        return [4 /*yield*/, Promise.all([
                                db.collection('messages')
                                    .find(query)
                                    .sort({ createdAt: -1 })
                                    .skip(offset)
                                    .limit(limit)
                                    .toArray(),
                                db.collection('messages').countDocuments(query)
                            ])];
                    case 2:
                        _a = _b.sent(), messages = _a[0], total = _a[1];
                        return [2 /*return*/, {
                                messages: castToTypeArray(messages),
                                total: total
                            }];
                }
            });
        });
    };
    // Memory operations
    DatabaseService.prototype.addMemory = function (memoryData) {
        return __awaiter(this, void 0, void 0, function () {
            var db, memory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        db = _a.sent();
                        memory = __assign(__assign({}, memoryData), { createdAt: new Date(), _id: new mongodb_1.ObjectId() });
                        return [4 /*yield*/, db.collection('memories').insertOne(memory)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, castToType(memory)];
                }
            });
        });
    };
    DatabaseService.prototype.getMemoriesByMessageId = function (messageId) {
        return __awaiter(this, void 0, void 0, function () {
            var db, sanitizedMessageId, memories;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        db = _a.sent();
                        sanitizedMessageId = sanitizer_1.SecuritySanitizer.sanitizeString(messageId);
                        return [4 /*yield*/, db.collection('memories')
                                .find({ messageId: sanitizedMessageId })
                                .sort({ order: 1 })
                                .toArray()];
                    case 2:
                        memories = _a.sent();
                        return [2 /*return*/, castToTypeArray(memories)];
                }
            });
        });
    };
    // AI Screen operations
    DatabaseService.prototype.addScreens = function (screens) {
        return __awaiter(this, void 0, void 0, function () {
            var db, screensToInsert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        db = _a.sent();
                        screensToInsert = screens.map(function (screen) { return (__assign(__assign({}, screen), { createdAt: new Date(), _id: new mongodb_1.ObjectId() })); });
                        return [4 /*yield*/, db.collection('screens').insertMany(screensToInsert)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, screensToInsert.map(function (screen) { return castToType(screen); })];
                }
            });
        });
    };
    DatabaseService.prototype.getScreensByMessageId = function (messageId) {
        return __awaiter(this, void 0, void 0, function () {
            var db, sanitizedMessageId, screens;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        db = _a.sent();
                        sanitizedMessageId = sanitizer_1.SecuritySanitizer.sanitizeString(messageId);
                        return [4 /*yield*/, db.collection('screens')
                                .find({ messageId: sanitizedMessageId })
                                .sort({ screenIndex: 1 })
                                .toArray()];
                    case 2:
                        screens = _a.sent();
                        return [2 /*return*/, castToTypeArray(screens)];
                }
            });
        });
    };
    // Reaction operations
    DatabaseService.prototype.addReaction = function (reactionData) {
        return __awaiter(this, void 0, void 0, function () {
            var db, reaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        db = _a.sent();
                        reaction = __assign(__assign({}, reactionData), { createdAt: new Date(), _id: new mongodb_1.ObjectId() });
                        return [4 /*yield*/, db.collection('reactions').insertOne(reaction)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, castToType(reaction)];
                }
            });
        });
    };
    // Template operations
    DatabaseService.prototype.createTemplate = function (templateData) {
        return __awaiter(this, void 0, void 0, function () {
            var db, template;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        db = _a.sent();
                        template = __assign(__assign({}, templateData), { createdAt: new Date(), _id: new mongodb_1.ObjectId() });
                        return [4 /*yield*/, db.collection('templates').insertOne(template)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, castToType(template)];
                }
            });
        });
    };
    DatabaseService.prototype.clearTemplates = function () {
        return __awaiter(this, void 0, void 0, function () {
            var db;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        db = _a.sent();
                        return [4 /*yield*/, db.collection('templates').deleteMany({})];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DatabaseService.prototype.clearThemes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var db;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        db = _a.sent();
                        return [4 /*yield*/, db.collection('themes').deleteMany({})];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DatabaseService.prototype.getTemplates = function (category) {
        return __awaiter(this, void 0, void 0, function () {
            var db, query, templates;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        db = _a.sent();
                        query = category
                            ? { category: sanitizer_1.SecuritySanitizer.sanitizeString(category), isActive: true }
                            : { isActive: true };
                        return [4 /*yield*/, db.collection('templates').find(query).toArray()];
                    case 2:
                        templates = _a.sent();
                        return [2 /*return*/, castToTypeArray(templates)];
                }
            });
        });
    };
    DatabaseService.prototype.getTemplateById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var objectId, db, template;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        objectId = toObjectId(id);
                        if (!objectId)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, this.connect()];
                    case 1:
                        db = _a.sent();
                        return [4 /*yield*/, db.collection('templates').findOne({ _id: objectId })];
                    case 2:
                        template = _a.sent();
                        return [2 /*return*/, castToType(template)];
                }
            });
        });
    };
    DatabaseService.prototype.updateTemplate = function (id, updateData) {
        return __awaiter(this, void 0, void 0, function () {
            var objectId, db, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        objectId = toObjectId(id);
                        if (!objectId)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, this.connect()];
                    case 1:
                        db = _a.sent();
                        return [4 /*yield*/, db.collection('templates').findOneAndUpdate({ _id: objectId }, { $set: __assign(__assign({}, updateData), { updatedAt: new Date() }) }, { returnDocument: 'after' })];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result ? castToType(result) : null];
                }
            });
        });
    };
    DatabaseService.prototype.deleteTemplate = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var objectId, db, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        objectId = toObjectId(id);
                        if (!objectId)
                            return [2 /*return*/, false];
                        return [4 /*yield*/, this.connect()];
                    case 1:
                        db = _a.sent();
                        return [4 /*yield*/, db.collection('templates').deleteOne({ _id: objectId })];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result.deletedCount === 1];
                }
            });
        });
    };
    // Theme operations
    DatabaseService.prototype.createTheme = function (themeData) {
        return __awaiter(this, void 0, void 0, function () {
            var db, theme;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        db = _a.sent();
                        theme = __assign(__assign({}, themeData), { createdAt: new Date(), _id: new mongodb_1.ObjectId() });
                        return [4 /*yield*/, db.collection('themes').insertOne(theme)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, castToType(theme)];
                }
            });
        });
    };
    DatabaseService.prototype.getThemes = function (category) {
        return __awaiter(this, void 0, void 0, function () {
            var db, query, themes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        db = _a.sent();
                        query = category
                            ? { category: sanitizer_1.SecuritySanitizer.sanitizeString(category), isActive: true }
                            : { isActive: true };
                        return [4 /*yield*/, db.collection('themes').find(query).toArray()];
                    case 2:
                        themes = _a.sent();
                        return [2 /*return*/, castToTypeArray(themes)];
                }
            });
        });
    };
    DatabaseService.prototype.getThemeById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var objectId, db, theme;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        objectId = toObjectId(id);
                        if (!objectId)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, this.connect()];
                    case 1:
                        db = _a.sent();
                        return [4 /*yield*/, db.collection('themes').findOne({ _id: objectId })];
                    case 2:
                        theme = _a.sent();
                        return [2 /*return*/, castToType(theme)];
                }
            });
        });
    };
    DatabaseService.prototype.updateTheme = function (id, updateData) {
        return __awaiter(this, void 0, void 0, function () {
            var objectId, db, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        objectId = toObjectId(id);
                        if (!objectId)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, this.connect()];
                    case 1:
                        db = _a.sent();
                        return [4 /*yield*/, db.collection('themes').findOneAndUpdate({ _id: objectId }, { $set: __assign(__assign({}, updateData), { updatedAt: new Date() }) }, { returnDocument: 'after' })];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result ? castToType(result) : null];
                }
            });
        });
    };
    DatabaseService.prototype.deleteTheme = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var objectId, db, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        objectId = toObjectId(id);
                        if (!objectId)
                            return [2 /*return*/, false];
                        return [4 /*yield*/, this.connect()];
                    case 1:
                        db = _a.sent();
                        return [4 /*yield*/, db.collection('themes').deleteOne({ _id: objectId })];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result.deletedCount === 1];
                }
            });
        });
    };
    // Analytics
    DatabaseService.prototype.getAnalytics = function () {
        return __awaiter(this, arguments, void 0, function (days) {
            var db, startDate, _a, totalUsers, totalMessages, totalMemories, totalReactions, recentUsers, recentMessages, viewedMessages;
            if (days === void 0) { days = 30; }
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        db = _b.sent();
                        startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
                        return [4 /*yield*/, Promise.all([
                                db.collection('users').countDocuments(),
                                db.collection('messages').countDocuments(),
                                db.collection('memories').countDocuments(),
                                db.collection('reactions').countDocuments(),
                                db.collection('users').countDocuments({ createdAt: { $gte: startDate } }),
                                db.collection('messages').countDocuments({ createdAt: { $gte: startDate } }),
                                db.collection('messages').countDocuments({ isViewed: true })
                            ])];
                    case 2:
                        _a = _b.sent(), totalUsers = _a[0], totalMessages = _a[1], totalMemories = _a[2], totalReactions = _a[3], recentUsers = _a[4], recentMessages = _a[5], viewedMessages = _a[6];
                        return [2 /*return*/, {
                                totalUsers: totalUsers,
                                totalMessages: totalMessages,
                                totalMemories: totalMemories,
                                totalReactions: totalReactions,
                                recentUsers: recentUsers,
                                recentMessages: recentMessages,
                                viewedMessages: viewedMessages,
                                viewRate: totalMessages > 0 ? (viewedMessages / totalMessages * 100) : 0
                            }];
                }
            });
        });
    };
    return DatabaseService;
}());
exports.DatabaseService = DatabaseService;
exports.dbService = new DatabaseService();
