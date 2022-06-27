import { NextFunction, Request, Response } from "express";
/**
 * Error Middleware
 * @param {any} err
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export declare function errorHandler(err: any, req: Request, res: Response, next: NextFunction): void;
