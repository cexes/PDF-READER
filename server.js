const  express = require('express');
const app = express();
const routes = require('./src/routes/routes.js');
const session = require ('./src/middleware/Session');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session);
app.use(routes);

app.listen(3030,()=> {
   console.log("Running on the dor 3030")
});
