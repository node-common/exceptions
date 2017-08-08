/**
 *  Super class Exception extending super class Error
 *  ---------------------------------------------------------------
 *  Exceptions should be thrown or be passed back in promises
 *  as default error handler mechanics.
 *
 *  By default list of provided Exception extensions is using
 *  well-known HTTP codes for better recognition of problem.
 */
export class Exception extends Error {

    public name: string;

    public code: number;

    /**
     * Exception constructor
     * -------------------------------------------------------------
     * @param {string} message : Message which will identify exact
     *                          error or improper behavior happened
     *                          at the place above the throw statement
     *
     * @param {number} code    : Code should be numeric and be well
     *                          recognizable common value of some
     *                          standard (ex. HTTP)
     */
    constructor(message: string, code: number) {

        super(message);

        Object.setPrototypeOf(this, Exception.prototype);
        Error.captureStackTrace(this, this.constructor);

        this.name = this.constructor.name;
        this.code = Number(code);

    }

    public getMessage(): string {
        return this.message;
    }

    public getCode(): number {
        return this.code;
    }

    public getStackTrace(): any {
        return this.stack;
    }

}

/**
 * Not implemented exception
 * ---------------------------------------------------------------
 * should be thrown inside methods which have not yet established
 * their full functionality and should not be called by any other
 * code within program
 */
export class NotImplementedException extends Exception {

    constructor(message: string) {
        super(message, 501);
    }

}

/**
 * Validation Exception
 * ---------------------------------------------------------------
 * should be thrown when some incoming data violates some of the
 * requirements assigned to process
 */
export class DataValidationException extends Exception {

    constructor(message: string) {
        super(message, 400);
    }

}

/**
 * Not Found Exception
 * ---------------------------------------------------------------
 * should be thrown when some method can't find expecting piece
 * of information and by it's nature method is produce or return or
 * exception which will bubble up some message
 */
export class NotFoundException extends Exception {

    constructor(message: string) {
        super(message, 404);
    }

}

/**
 * Not Authorized Exception
 * ---------------------------------------------------------------
 * should be used on methods which require some token to be
 * authorized prior to somebody with this token will access
 * this resource
 */
export class NotAuthorizedException extends Exception {

    constructor(message: string) {
        super(message, 401);
    }

}

/**
 * Restricted Access
 * ---------------------------------------------------------------
 * should be used when some method should prevent somebody with
 * limited access to proceed with the execution
 */
export class RestrictedAccessException extends Exception {

    constructor(message: string) {
        super(message, 403);
    }

}

/**
 * Runtime Exception
 * ---------------------------------------------------------------
 * should be thrown if system encouter unrecoverable error which
 * prevents further process execution
 */
export class RuntimeException extends Exception {

    constructor(message: string) {
        super(message, 500);
    }

}