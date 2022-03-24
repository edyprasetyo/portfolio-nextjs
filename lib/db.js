import { PrismaClient } from "@prisma/client";
import safeJsonStringify from "safe-json-stringify";


let db
if (process.env.NODE_ENV === 'production') {
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
  // console.log(data);
  return data
});

export default db

// var db = new PrismaClient();
// db.$use(async (params, next) => {
//   const result = await next(params)
//   const stringifiedData = safeJsonStringify(result);
//   const data = JSON.parse(stringifiedData);
//   console.log(data);
//   return data
// });

// export default db