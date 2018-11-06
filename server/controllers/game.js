const express = require('express');
const router  = express.Router();
const Game = require('../models/game');

router.get('/new', (req,res) => {
  res.render('game/new.ejs');
});

router.get('/', async (req,res) => {
  try{
    const games = await Game.find({});
    res.send(games);
  }catch(err){
    console.log('error' + err);
    res.send('something went wrong!' + err);
  }
});

router.post('/new', async (req,res) => {
  try{
    req.body.score = [req.body.team1Score,req.body.team2Score];
    req.body.teams = [req.body.team1,req.body.team2];
    await Game.create(req.body);
    res.redirect('/game');
  }catch(err){
    console.log('error:' + err);
    res.send('error:' + err);
  }
});

router.delete('/:id', async (req,res) => {
  try{
    await Game.findByIdAndDelete(req.params.id);
    res.redirect('/game');
  }catch(err){
    console.log('error:' + err);
    res.send('error:' + err);
  }
});

router.put('/:id', async (req,res) => {
  try{
    const game = await Game.findById(req.params.id);
    score = [req.body.team1Score,req.body.team2Score];
    teams = [req.body.team1,req.body.team2];
    game.score = score;
    game.teams = teams;
    await game.save();
    res.redirect('/game');
    }
  }catch(err){
    console.log('error:' + err);
    res.send('error:' + err);
  }
});

module.exports = router;
