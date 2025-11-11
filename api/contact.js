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
exports.default = handler;
var resend_1 = require("resend");
var REQUIRED_ENV_VARS = ['RESEND_API_KEY', 'CONTACT_FROM_EMAIL', 'CONTACT_TO_EMAIL'];
function handler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var body, name, email, message, missingEnv, resend, error_1;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (req.method !== 'POST') {
                        res.setHeader('Allow', 'POST');
                        return [2 /*return*/, res.status(405).json({ error: 'Method not allowed' })];
                    }
                    body = parseBody(req.body);
                    name = (_a = body === null || body === void 0 ? void 0 : body.name) === null || _a === void 0 ? void 0 : _a.trim();
                    email = (_b = body === null || body === void 0 ? void 0 : body.email) === null || _b === void 0 ? void 0 : _b.trim();
                    message = (_c = body === null || body === void 0 ? void 0 : body.message) === null || _c === void 0 ? void 0 : _c.trim();
                    if (!name || !email || !message) {
                        return [2 /*return*/, res.status(400).json({ error: 'Please complete all required fields.' })];
                    }
                    if (!isValidEmail(email)) {
                        return [2 /*return*/, res.status(400).json({ error: 'Please provide a valid email address.' })];
                    }
                    if (message.length > 5000) {
                        return [2 /*return*/, res.status(400).json({ error: 'Message is too long.' })];
                    }
                    missingEnv = getMissingEnvVars();
                    if (missingEnv.length > 0) {
                        console.error('Missing environment variables:', missingEnv.join(', '));
                        return [2 /*return*/, res.status(500).json({ error: 'Email service is not configured.' })];
                    }
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 3, , 4]);
                    resend = createResendClient();
                    return [4 /*yield*/, resend.emails.send({
                            from: process.env.CONTACT_FROM_EMAIL,
                            to: [process.env.CONTACT_TO_EMAIL],
                            replyTo: email,
                            subject: "Portfolio contact form: ".concat(name),
                            html: buildHtmlEmail({ name: name, email: email, message: message }),
                            text: buildTextEmail({ name: name, email: email, message: message }),
                        })];
                case 2:
                    _d.sent();
                    return [2 /*return*/, res.status(200).json({ ok: true })];
                case 3:
                    error_1 = _d.sent();
                    console.error('Resend email error:', error_1);
                    return [2 /*return*/, res.status(500).json({ error: extractErrorMessage(error_1) })];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function createResendClient() {
    var apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        throw new Error('Resend API key is not configured.');
    }
    return new resend_1.Resend(apiKey);
}
function parseBody(body) {
    if (!body) {
        return null;
    }
    if (typeof body === 'string') {
        return safeJsonParse(body);
    }
    if (Buffer.isBuffer(body)) {
        return safeJsonParse(body.toString('utf8'));
    }
    return body;
}
function safeJsonParse(payload) {
    try {
        return JSON.parse(payload);
    }
    catch (error) {
        console.error('Failed to parse JSON payload', error);
        return null;
    }
}
function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
function getMissingEnvVars() {
    return REQUIRED_ENV_VARS.filter(function (key) { return !process.env[key]; });
}
function buildHtmlEmail(_a) {
    var name = _a.name, email = _a.email, message = _a.message;
    var sanitizedMessage = escapeHtml(message).replace(/\n/g, '<br/>');
    return "\n    <div style=\"font-family: Arial, sans-serif; line-height: 1.6;\">\n      <h2 style=\"margin-bottom: 16px;\">New message from your portfolio</h2>\n      <p><strong>Name:</strong> ".concat(escapeHtml(name), "</p>\n      <p><strong>Email:</strong> ").concat(escapeHtml(email), "</p>\n      <p style=\"margin-top: 24px;\"><strong>Message:</strong></p>\n      <p>").concat(sanitizedMessage, "</p>\n      <hr style=\"margin: 24px 0;\">\n      <p style=\"font-size: 12px; color: #555;\">This email was sent from orgesisufi.com.</p>\n    </div>\n  ");
}
function buildTextEmail(_a) {
    var name = _a.name, email = _a.email, message = _a.message;
    return "New message from your portfolio\n\nName: ".concat(name, "\nEmail: ").concat(email, "\n\n").concat(message);
}
function escapeHtml(value) {
    return value.replace(/[&<>"']/g, function (char) {
        switch (char) {
            case '&':
                return '&amp;';
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '"':
                return '&quot;';
            case "'":
                return '&#039;';
            default:
                return char;
        }
    });
}
function extractErrorMessage(error) {
    if (!error)
        return 'Failed to send the message. Please try again later.';
    if (typeof error === 'string') {
        return error;
    }
    if (error instanceof Error) {
        return error.message || 'Failed to send the message. Please try again later.';
    }
    if (typeof error === 'object') {
        var maybeMessage = error.message;
        if (maybeMessage)
            return maybeMessage;
    }
    return 'Failed to send the message. Please try again later.';
}
