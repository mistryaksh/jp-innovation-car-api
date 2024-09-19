import { Request, Response } from "express";

import { STATUS_CODES } from "../interface";
import { NotFound } from "../utils";

export const notFoundMiddleware = (_: Request, res: Response) => {
     return NotFound(res, "API ENDPOINT NOT FOUND");
};
