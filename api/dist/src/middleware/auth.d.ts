import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
/**
 * Verify access token
 * @param {Request} req
 * @param {Response} res
 */
export declare function verfiyAccessToken(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
/**
 * Verfy refresh token
 * @param {string} refreshToken
 */
export declare function verifyRefreshToken(refreshToken: string): Promise<string | jwt.JwtPayload>;
