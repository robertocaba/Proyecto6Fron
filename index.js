const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/users',require('./routes/users'));
app.use('/productos', require('./routes/productos'));
app.use('/categoria', require('./routes/categorias'));

app.listen(PORT,() => console.log('servidor levantado en el puerto'+ PORT));