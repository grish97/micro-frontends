export declare const ACCESS_TOKEN_EXP_TIME = "10h";
export declare const REFRESH_TOKEN_EXP_TIME = "1d";
export declare const REFRESH_TOKEN_EXP_AGE: number;
export declare const COOKIE_JWT_KEY = "jwt";
export declare type TCallback<TR = void> = (...args: any[]) => TR;
/**
 * Generate access token
 * @param {string} userId
 */
export declare function signAccessToken(userId: string): string;
/**
 * Generate refresh token
 * @param {string} userId
 */
export declare function signRefreshToken(userId: string): string;
/**
 * Catching Errors in Async Functions
 * @param {TCallback<any>} callbackFn
 * @returns {TCallback}
 */
export declare function catchAsync(callbackFn: TCallback<any>): TCallback;
