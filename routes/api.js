const express = require('express');
const router = express.Router();

//get call to return JSON that format natural and unix date
router.get('/:dateVal',function(req, res, next){
  var dateVal = req.params.dateVal;
  var dateFormattingOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  var naturalDate = isNaN(dateVal)? new Date(dateVal) : new Date(dateVal * 1000);
  naturalDate = (naturalDate == 'Invalid Date' ) ? null : naturalDate.toLocaleDateString('en-us', dateFormattingOptions);
  var unixDate = isNaN(dateVal) ? new Date(dateVal).getTime()/1000 : Number(dateVal);
  res.json({unix: unixDate, natural: naturalDate});

});










module.exports = router;
