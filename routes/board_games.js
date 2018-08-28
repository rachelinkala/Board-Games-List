var express = require('express');
var router = express.Router();
var Board = require('../models').Board;

var board_games = [
  { id: 1, title: 'Clue' },
  { id: 2, title: 'Settlers of Catan' },
  { id: 3, title: 'Scotland Yard' },
  { id: 4, title: 'Bananagrams' },
  { id: 5, title: 'Legacy' },
  { id: 6, title: 'Tokaido' },
  { id: 7, title: 'Marrying Mr. Darcy' },
  { id: 8, title: 'Scattegories' },
  { id: 9, title: 'Takenoko' },
  { id: 10, title: 'Expedition' },
]

/* GET game listings */
router.get('/', function(req, res) {
  Board.all()
    .then( function(board_games) {
      return res.render('board_games', { board_games: board_games });
  });
});

/* POST add board game listing */
router.post('/', function(req, res) {
  var title = req.body.title;
  Board.create({ title: title })
    .then( function() {
      res.redirect('/board_games');
  });
});

//Delete
router.delete('/:id', function(req, res) {
  Board.findById(req.params.id)
  .then( function(board) {
    board.destroy()
  })
  .then( function() {
    return res.redirect('/board_games');
  });
});

//GET

router.get('/:id/edit', function(req, res) {
  Board.findById(req, params.id)
    .then( function(board) {
      return res.render('edit', { board: board });
  });
});

//PUT

router.put('/:id', function(req, res) {
  Board.update(
    {title: req.body.title },
    { where: { id: req.params.id } }
  )
  .then( function() {
    return res.redirect('/board_games');
  })
});

router.get('/', function(req, res) {
  Board.all({
    order: [
      ['createdAt', 'ASC']
    ]
  })
  .then( function(board_games) {
    return res.render('edit', { board: board });
  })
})

module.exports = router;