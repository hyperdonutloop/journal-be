const router = require('express').Router();
const Entries = require('../models/entries-model.js');
const authenticate = require('../auth/restricted-middlware.js');

//get all entries
router.get('/', authenticate, (req, res) => {
  Entries.find()
    .then(entry => {
      res.status(200).json(entry)
    })
    .catch(error => {
      res.status(500).json({ message: 'YOU SHALL NOT PASS 🧙🏻‍♂️', error })
    })
});

// get an entry by id
router.get('/:id', authenticate, (req, res) => {
  const { id } = req.params;

  Entries.findById(id)
    .then(entry => {
      if (entry) {
        res.status(200).json({
          status: 200,
          data: entry,
        })
      } else {
        res.status(404).json({ error: 'No entries, make one!' })
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Some error occured 🥺', error })
    })
});

// get entry by user id

router.get('/user/:id', authenticate, (req, res) => {
  const { id } = req.params;

  Entries.getByUserId(id)
    .then(entry => {
      if(entry) {
        res.status(200).json({
          status: 200,
          data: entry,
        })
      } else {
        res.status(404).json({ error: 'User has not created an entry' })
      }
    })
    .catch(error => {
      res.status(500).json({
        status: 500,
        error: 'Cannot get entries', error,
      })
    });
})

// create an entry
router.post('/', (req, res) => {
  let entryData = req.body;
  Entries.add(entryData)
    .then(added => {
      res.status(201).json(added)
    })
    .catch(error => {
      res.status(500).json({ message: 'Unable to add post', error })
    })
})

//edit an entry
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Entries.findById(id)
    .then(updatedEntry => {
      if (updatedEntry) {
        Entries.update(changes, id)
          .then(updatedEntry => {
            res.json(updatedEntry)
          })
      } else {
        res.status(404).json({ message: 'Could not find post with the given id' })
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to update post', error })
    })
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Entries.remove(id)
    .then(removed => {
      if (removed) {
        res.json({ message: 'Post has been destroyed 💥' })
      } else {
        res.status(404).json({ message: 'Could not find post with the given id' })
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to delete post', error })
    })
})

// delete an entry

module.exports = router;
