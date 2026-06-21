export default {
  client: "sqlite3",

  connection: {
    filename: "./src/database/database.db",
  },

  pool: {
    afterCreate: (conn: any, done: Function) => {
      conn.run("PRAGMA foreign_keys = ON", (err: Error | null) => {
        done(err, conn);
      });
    },
  },

  useNullAsDefault: true,

  migrations: {
    extension: "ts",
    directory: "./src/database/migrations",
  },

  seeds: {
    extension: "ts",
    directory: "./src/database/seeds",
  },
};
