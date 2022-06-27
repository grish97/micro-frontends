import { Request, Response, NextFunction } from "express";
export declare const COOKIE_KEY = "access_token";
export declare function generateAccessToken(id: string): string;
export declare function verifyJWT(req: Request, res: Response, next: NextFunction): void;
