
/*
 * GET home page.
 */

exports.view = function(req, res) {
  const nameToShow = req.params.userName;
  res.render('hello', {
  	'name': nameToShow,
  });
};
