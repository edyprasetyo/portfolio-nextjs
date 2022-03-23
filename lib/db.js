/* eslint-disable @typescript-eslint/ban-ts-comment */

const { PrismaClient } = require("@prisma/client");
const safeJsonStringify = require("safe-json-stringify");


// export var db = new PrismaClient();
// db.$use(async (params, next) => {
//   const result = await next(params)
//   const stringifiedData = safeJsonStringify(result);
//   const data = JSON.parse(stringifiedData);
//   return data
// })


let db;

if (process.env.NODE_ENV === "production") {
  db = new PrismaClient()
} else {
  if (!global.db) {
    global.db = new PrismaClient()
  }

  db = global.db
}
db.$use(async (params, next) => {
  const result = await next(params)
  const stringifiedData = safeJsonStringify(result);
  const data = JSON.parse(stringifiedData);
  return data
})

export default db