const db = require("../database/knex")



beforeAll(async () => {
  // run the migrations and do any other setup here
  await db.migrate.latest()
})

afterAll(async () => {
    await db.destroy()
  })

test("select pets", async () => {
  let pets = await db.from("pets").select("name")
  expect(pets.length).toBe(3)
})

test("insert pets", async () => {
    await db("pets").insert([{
        pet_type: 'Bird',
        name: 'Tweety',
        age: 2
    }])
  })
  

