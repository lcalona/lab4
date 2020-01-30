exports.view = function(req, res) {
  const name = req.params.name;
  res.render('project', {
    "projectName": name
  });
}