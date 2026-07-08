import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("products").del();

  await knex("products").insert([
    { name: "Notebook Dell Inspiron", price: "R$ 3.499,90" },
    { name: "Mouse Gamer RGB", price: "R$ 149,90" },
    { name: "Teclado Mecânico", price: "R$ 299,90" },
    { name: "Monitor 24 Polegadas", price: "R$ 899,90" },
    { name: "Headset Bluetooth", price: "R$ 249,90" },
    { name: "Webcam Full HD", price: "R$ 199,90" },
    { name: "SSD 1TB", price: "R$ 459,90" },
    { name: "Cadeira Gamer", price: "R$ 1.299,90" },
    { name: "Hub USB 3.0", price: "R$ 89,90" },
    { name: "Carregador USB-C 65W", price: "R$ 179,90" },
  ]);
}
