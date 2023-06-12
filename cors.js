// Importe o pacote 'cors'
const cors = require('cors');

// Defina as opções do CORS
const corsOptions = {
  origin: 'http://localhost', // Defina a origem permitida
};

// Exporte o middleware do CORS
module.exports = cors(corsOptions);
