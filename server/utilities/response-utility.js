"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATUS = exports.errorResponse = exports.successResponse = exports.STATUSCODE = void 0;
const STATUSCODE = {
    CREATED: 201,
    OK: 200,
    SERVER: 500,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
};
exports.STATUSCODE = STATUSCODE;
const STATUS = {
    Success: "success",
    Error: "error",
};
exports.STATUS = STATUS;
const successResponse = (status, data) => {
    return {
        status: status,
        data: data,
    };
};
exports.successResponse = successResponse;
const errorResponse = (status, data) => {
    return {
        status: status,
        error: data,
    };
};
exports.errorResponse = errorResponse;
