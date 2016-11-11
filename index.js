const app = require('express')();
const bodyParser = require('body-parser');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
  let a = parseInt(req.query.a) || 0,
      b = parseInt(req.query.b) || 0,
      c = a + b;

  console.log(c);
  res.send('' + c);
})

app.listen(1337);
