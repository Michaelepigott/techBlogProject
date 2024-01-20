const express = require('express');
const router = express.Router();
const { Comments } = require('../../models')
const withAuth = require('../../utils/auth')

router.post('/', withAuth, async (req, res) => {
  try {
    // Create the comment in the database
    const newComment = await Comments.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    //send comment
    res.status(200).json(newComment);
  } catch (err) {
    // Handle any errors with a 500 response
    res.status(500).json(err);
  }
});
  
  module.exports = router;