exports.seed =  (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('pets').del()
    .then( () => {
        // Inserts seed entries
        return knex('pets').insert([
            {
                pet_type: 'Dog',
                name: 'Pepito',
                age: 8
            },{
                pet_type: 'Cat',
                name: 'Vito',
                age: 2
            },{
                pet_type: 'rabbit',
                name: 'Bugs',
                age: 3
            }
        ]);
    });
};
