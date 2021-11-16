const express = require('express');
const app = express();
const morgan = require('morgan');

//config
app.set('port', process.env.PORT || 3000);
app.set('json spaces',2 );

//middlewares
app.use(morgan('dev'));
//recepcion de formatos JSON
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//rutas
app.use(require('./routes/index'));
app.use('/api/animes', require('./routes/animes'));

//inicio del servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});