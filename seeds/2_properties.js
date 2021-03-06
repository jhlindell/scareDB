
exports.seed = function(knex, Promise) {
  return knex('properties').del()
    .then(function () {
      return knex('properties').insert([
        {
          owner_id: 1,
          property_name: 'Haunted Hummus House',
          street_address: '1789 Nutscaping View',
          city: 'Boulder',
          state: 'CO',
          zip_code: 80301,
          photo_url: '/images/haunted-house-1.jpg',
          description: 'This place is maximum haunted. The ghosts here will scare the falafel out of you. Book here if you got the stones.',
          amenities: 'running water and power',
          nightly_price: 29.99,
          house_rules: 'Keep the noise down.',
          bookedOnHalloween: false
        },
        {
          owner_id: 2,
          property_name: 'Spooky TreeHouse',
          street_address: '900 scary tree grove',
          city: 'Boulder',
          state: 'CO',
          zip_code: 80303,
          photo_url: '/images/haunted-house-2.jpg',
          description: 'This treehouse is next level haunted. This treehouse is probably the headquaters for Ghosts and demons to practice their latest scares.',
          amenities: 'A pretty comfy rug',
          nightly_price: 3.50,
          house_rules: 'Dont use a ouija board.',
          bookedOnHalloween: false
        },
        {
          owner_id: 3,
          property_name: 'Esoteric Estate',
          street_address: '1789 Ocean View',
          city: 'Boulder',
          state: 'CO',
          zip_code: 80301,
          photo_url: '/images/haunted-house-5.jpg',
          description: 'Think you can sleep through anything? How about Boulder hippie ghost drum circles? They have didgeridoos.',
          amenities: 'Wonderful Overlook, hottub, beanbags, patchouli',
          nightly_price: 45.99,
          house_rules: 'Bed time is 9-o-clock.',
          bookedOnHalloween: false
        }
      ]);
    })
    .then(function(){
      return knex.raw("SELECT setval('properties_id_seq', (SELECT MAX(id) FROM properties))");
    });
};
