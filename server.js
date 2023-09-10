const  express = require('express');
const app = express();
const routes = require('./src/routes/routes.js');
const bodyParser = require('body-parser');
const Session = require('./src/middleware/Session.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.listen(3030,()=> {
   console.log("Running on the dor 3030")
});
