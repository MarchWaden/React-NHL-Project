const express = require('express');
const router  = express.Router();
const Team = require('../models/team');

router.get('/new', (req,res) => {
  res.render('team/new.ejs');
});

router.get('/', async (req,res) => {
  try{
    const teams = await Team.find({});
    res.send(teams);
  }catch(err){
    console.log('error' + err);
    res.send('something went wrong!' + err);
  }
});

router.post('/new', async (req,res) => {
  try{
    console.log(req.body);
    await Team.create(req.body);
    console.log('made a team');
    res.redirect('/team');
  }catch(err){
    console.log('error:' + err);
    res.send('error:' + err);
  }
});

router.delete('/:id', async (req,res) => {
  try{
    await Team.findByIdAndDelete(req.params.id);
    console.log('deleted a team');
    res.redirect('/team');
  }catch(err){
    console.log('error:' + err);
    res.send('error:' + err);
  }
});

router.put('/:id', async (req,res) => {
  try{
    const team = await Team.findById(req.params.id);
    team.name = req.body.name;
    await team.save();
    res.redirect('/team');
  }catch(err){
    console.log('error:' + err);
    res.send('error:' + err);
  }
});

module.exports = router;
