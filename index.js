const app = require('./app')

// Defin port and hostname
const PORT = process.env.PORT;
const hostname = 'localhost';


// app listen
app.listen(PORT, () => console.log(`server started on http://${hostname}:${PORT}`));