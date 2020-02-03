const express = require("express");
const db = require("./users-model");
//const authenticate = ('../auth/authenticate-middleware');
const router = require('express').Router();

router.get("/",  async (req, res, next) => {
    try {
        const songs = await db.getUsers()
        res.status(200).json(songs)
    }
    catch (error){
        next(error)
    }
})

router.post('/', async (req, res) => {
  try {
        return res.status(201).json(await db.addUser(req.body))
    }
    catch{
        res.status(500).json({ message: `Failed to add a user` })
    }
  });

  router.put('/:id', async (req, res) => {
      try{
          await db.updateUser(req.params.id, { ...req.body, id: req.params.id})
          const newUser = await db.getById(req.params.id)
          res.status(200).json(newUser)
      }
      catch {
          res.status(201).json({  message: "User Updated"})
      }


  })

  router.delete('/:id', async (req, res) => {
      try {
          const result = await db.deleteUser(req.params.id)
          res.status(200).json({ status: `User has been deleted`})
      }
      catch {
          res.status(500).json({ error: "500 Error, could not delete."})
      }
  })


module.exports = router