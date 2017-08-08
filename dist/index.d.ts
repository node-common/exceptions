export declare class Exception extends Error {
    name: string;
    code: number;
    constructor(message: string, code: number);
    getMessage(): string;
    getCode(): number;
    getStackTrace(): any;
}
export declare class NotImplementedException extends Exception {
    constructor(message: string);
}
export declare class DataValidationException extends Exception {
    constructor(message: string);
}
export declare class NotFoundException extends Exception {
    constructor(message: string);
}
export declare class NotAuthorizedException extends Exception {
    constructor(message: string);
}
export declare class RestrictedAccessException extends Exception {
    constructor(message: string);
}
export declare class RuntimeException extends Exception {
    constructor(message: string);
}
