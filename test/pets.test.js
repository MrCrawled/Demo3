const db = require("../database/knex")

beforeAll(async () => {
  // run the migrations and do any other setup here
  await db.migrate.latest()
})

test("select pets", async () => {
  let pets = await db.from("pets").select("name")
  expect(pets.length).toBe(3)
  done() 
})