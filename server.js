const  express = require('express');
const app = express();
const routes = require('./src/Routes/routes.js');

app.use(routes);

app.listen(3030,()=> {
   console.log("Running on the dor 3030")
});
