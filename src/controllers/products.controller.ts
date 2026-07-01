import { z } from "zod";
import { knex } from "@/database/knex";
import { AppError } from "@/utils/App-error";
import { NextFunction, Request, Response } from "express";

class ProductsControllers {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const { name } = request.query;
      const products = await knex("products")
        .select()
        .whereLike("name", `%${name ?? ""}%`)
        .orderBy("name");

      return response.json(products);
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

      const { name, price } = bodySchema.parse(request.body);

      await knex<ProductRepository>("products").insert({ name, price });

      return response.status(201).json();
    } catch (error) {
      next(error);
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      const id = z
        .string()
        .transform((value) => Number(value))
        .refine((value) => !isNaN(value), { message: "id must be a number" })
        .parse(request.params.id);

      const bodySchema = z.object({
        name: z.string().trim().min(6),
        price: z
          .number()
          .gt(0, { message: "value must be greater than 0 and" }),
      });

      const { name, price } = bodySchema.parse(request.body);

      const product = await knex<ProductRepository>("products")
        .select()
        .where({ id })
        .first();

      if (!product) {
        throw new AppError("product not found");
      }

      await knex<ProductRepository>("products")
        .update({ name, price, update_at: knex.fn.now() })
        .where({ id });

      return response.json();
    } catch (error) {
      next(error);
    }
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    try {
      const id = z
        .string()
        .transform((value) => Number(value))
        .refine((value) => !isNaN(value), { message: "id must be a number" })
        .parse(request.params.id);

      const product = await knex<ProductRepository>("products")
        .select()
        .where({ id })
        .first();

      if (!product) {
        throw new AppError("product not found");
      }

      await knex<ProductRepository>("products").delete().where({ id });

      return response.json();
    } catch (error) {}
  }
}

export { ProductsControllers };
