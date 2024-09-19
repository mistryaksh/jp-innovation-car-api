import { Request, Response, NextFunction } from "express";
import MasterServices from "../services/master.services";
import MasterController from "../controller/requisite.controller";
import { Document } from "mongoose";

export interface IControllerRoutes {
     path: string;
     handler: (req: Request, res: Response, next: NextFunction) => Promise<any>;
     method: METHOD;
     middleware?: Middleware[];
}

export type Middleware = (req: Request, res: Response, next: NextFunction) => void;

export interface IController {
     routes: IControllerRoutes[];
}

export type METHOD = "GET" | "PUT" | "HEAD" | "POST" | "DELETE";

export enum STATUS_CODES {
     OK = 200,
     CREATED = 201,
     NO_CONTENT = 204,
     NOT_MODIFIED = 304,
     BAD_REQUEST = 400,
     UNAUTHORIZED = 401,
     FORBIDDEN = 403,
     NOT_FOUND = 404,
     GONE = 410,
     INTERNAL_SERVER_ERROR = 500,
     SERVICE_UNAVAILABLE = 503,
}

export enum RESPONSE_MESSAGE {
     OK = "Ok",
     CREATED = "Created",
     NO_CONTENT = "No content",
     NOT_MODIFIED = "Not modified",
     BAD_REQUEST = "Bad request",
     UNAUTHORIZED = "Unauthorized",
     FORBIDDEN = "Forbidden",
     NOT_FOUND = "Not found",
     GONE = "Gone",
     INTERNAL_SERVER_ERROR = "Internal server error",
     SERVICE_UNAVAILABLE = "Service unavailable",
}

export type AuthSecurity = "JWT";

export interface IOkResponse<T> {
     success: boolean;
     data: T;
     status_code: RESPONSE_MESSAGE;
}

export interface IUnAuthorizedResponse {
     success: boolean;
     status_code: RESPONSE_MESSAGE;
     message: string;
}
export interface IBadRequest {
     success: boolean;
     status_code: RESPONSE_MESSAGE;
     message: string;
}

export enum SERVER_MESSAGES {
     INVALID_PASSWORD = "invalid password",
     ALREADY_EXIST = "data already exist",
     ACCOUNT_NOT_FOUND = "account not found",
     ACCESS_DENIED = "access denied for the user",
     LOGIN_REQUIRED = "No token, authorization denied",
     DATA_EXIST = "data already exist",
     DATA_NOT_EXIST = "data not found",
}
