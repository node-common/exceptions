"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Exception extends Error {
    constructor(message, code) {
        super(message);
        Object.setPrototypeOf(this, Exception.prototype);
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.code = Number(code);
    }
    getMessage() {
        return this.message;
    }
    getCode() {
        return this.code;
    }
    getStackTrace() {
        return this.stack;
    }
}
exports.Exception = Exception;
class NotImplementedException extends Exception {
    constructor(message) {
        super(message, 501);
    }
}
exports.NotImplementedException = NotImplementedException;
class DataValidationException extends Exception {
    constructor(message) {
        super(message, 400);
    }
}
exports.DataValidationException = DataValidationException;
class NotFoundException extends Exception {
    constructor(message) {
        super(message, 404);
    }
}
exports.NotFoundException = NotFoundException;
class NotAuthorizedException extends Exception {
    constructor(message) {
        super(message, 401);
    }
}
exports.NotAuthorizedException = NotAuthorizedException;
class RestrictedAccessException extends Exception {
    constructor(message) {
        super(message, 403);
    }
}
exports.RestrictedAccessException = RestrictedAccessException;
class RuntimeException extends Exception {
    constructor(message) {
        super(message, 500);
    }
}
exports.RuntimeException = RuntimeException;
//# sourceMappingURL=index.js.map