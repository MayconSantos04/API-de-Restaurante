import config from "../../knexfile";
import { knex as createKnex } from "knex";

export const knex = createKnex(config);