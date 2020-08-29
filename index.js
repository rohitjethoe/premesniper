const express = require('express');
const cors = require('cors');
const app = require('./server/main');

const server = express();

server.use(cors());
server.use(express.json());
server.use('/api', require('./server/routes/web'));

const PORT = 5000 || process.env.PORT;

server.listen(PORT, () => console.log(`DEV | Server has been launched on http://localhost:${PORT}`));

// Debugging code ---
//
// (async() => {
//     await app.openBrowser();
//     await app.findItem('Tops/Sweaters', 'Static Sweater ');
//     await app.launchPage();
//     await app.addToCart('Black');
// })() 