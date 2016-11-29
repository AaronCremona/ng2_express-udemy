var express = require('express');
var router = express.router();

var Message = require('../models/message');

router.post('/', function (req, res, next) {
  var message = new Message({
    content: req.body.content
  });

  message.save(function (err, result) {

    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }

    res.status(201).json({
      message: 'Message saved',
      obj: result
    });
  });
});

module.exports = router;
