import { z } from "zod";
import { NextFunction, Request, Response } from "express";

class ProductsControllers {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      return response.json({ message: "okl" });
    } catch (error) {
      next(error);
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        name: z.string().trim().min(6),
        price: z
          .number()
          .gt(0, { message: "value must be greater than 0 and" }),
      });

      const { name, price } = bodySchema.parse(request.body)

      return response.status(201).json({ name, price });
    } catch (error) {
      next(error);
    }
  }
}

export { ProductsControllers };
