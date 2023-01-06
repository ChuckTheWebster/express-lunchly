"use strict";

/** Database for lunchly */

const { Client } = require("pg");

// DB_URL definition for chuck
// const DB_URI = process.env.NODE_ENV === "test"
//     ? "postgresql:///lunchly_test"
//     : "postgresql:///lunchly";

// DB_URI definition for nico
const DB_URI = process.env.NODE_ENV === "test"
  ? "postgresql://nicom:nicom@localhost/lunchly_test"
  : "postgresql://nicom:nicom@localhost/lunchly"

let db = new Client({
  connectionString: DB_URI,
});

db.connect();


module.exports = db;
