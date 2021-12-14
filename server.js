const express = require('express');
const sequelize = require('./Develop/config/connection');
const routes = require('./Develop/routes');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log('App listening on port ' + PORT);
    });
});
