exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('entries').del()
    .then(function () {
      // Inserts seed entries
      return knex('entries').insert([
        {
          title: 'Blog Post 1',
          text: 'Thestral dirigible plums, Viktor Krum hexed memory charm Animagus Invisibility Cloak three-headed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry! Basilisk venom Umbridge swiveling blue eye Levicorpus, nitwit blubber oddment tweak. Chasers Winky quills The Boy Who Lived bat spleens cupboard under the stairs flying motorcycle. Sirius Black Holyhead Harpies, you’ve got dirt on your nose. Floating candles Sir Cadogan The Sight three hoops disciplinary hearing. Grindlewald pig’s tail Sorcerer\'s Stone biting teacup. Side-along dragon-scale suits Filch 20 points, Mr. Potter.',
          user_id: 1,
        },
        {
          title: 'Blog Post 2',
          text: 'Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma and Parvati Sorting Hat Minister of Magic blue turban remember my last.',
          user_id: 2,
        }
      ]);
    });
};
