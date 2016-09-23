console.log("index.js sourced");

// resolve to path
app.get('/', function(req, res){
  res.sendFile(path.resolve('public/index.html'));
});
git 
