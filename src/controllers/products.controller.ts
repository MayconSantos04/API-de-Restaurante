import { NextFunction, Request, Response } from "express";
import { AppError } from "@/utils/App-error";

class ProductsControllers {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      return response.json({ message: "okl" });
    } catch (error) {
      next(error);
    }
  }
}

export { ProductsControllers };
