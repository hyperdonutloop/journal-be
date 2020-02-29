const db = require('../dbConfig.js');

module.exports = {
  find,
  add,
  update,
  remove,
  findById,
  getByUserId
};

function getByUserId(user_id) {
  return db('entries')
    .where({ user_id })
    .select('id', 'title', 'text', 'created_at');
}
function find() {
  return db('entries');
}

async function add(entry) {
  const [id] = await db('entries').insert(entry);
  // (entry, ['id', 'title', 'text', 'user_id', 'created_at']);
  return findById(id);
}

function findById(id) {
  return db('entries')
    .where({ id })
    .first();
}

async function update(entry, id) {
  await db('entries')
  .where({ id: id })
  .update(entry);

  const [updatedEntry] = await db('entries')
  .where({ id: id })

  
  return updatedEntry;
}

function remove(id) {
  return db('entries')
    .where({ id: id })
    .delete();
}