import { Request, Response } from "express";
/**
 * Login user
 * @param {Request} req
 * @param {Response} res
 */
export declare function login(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
/**
 * Update user refresh/access tokens
 * @param {Request} req
 * @param {Response} res
 */
export declare function refreshToken(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
/**
 * Register user
 * @param {Request} req
 * @param {Response} res
 */
export declare function logout(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function register(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
