import { Request, Response, NextFunction } from "express";
import { ValidationResult } from "joi";
declare type TValidateCallback<T> = (payload: T) => Promise<ValidationResult<T>>;
export default function validateBody<T>(validateCb: TValidateCallback<T>): (req: Request, res: Response, next: NextFunction) => Promise<void>;
export {};
