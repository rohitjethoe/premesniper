// const express = require('express');
// const cors = require('cors');
const app = require('./server/main');

// const server = express();

// server.use(cors());
// server.use(express.json());
// server.use('/api', require('./server/routes/web'));

// const PORT = 5000 || process.env.PORT;

// server.listen(PORT, () => console.log(`DEV | Server has been launched on http://localhost:${PORT}`));

// Debugging code 
//
(async() => {
    const params = {
        name: 'Rohit Jethoe',
        email: 'test@gmail.com',
        phone: '0600000000',
        address: 'Grote Houtstraat 12',
        city: 'Haarlem',
        zip: '1992LV',
        country_code: 'NL',
        card_type: 'master',
        card_nr: '5350824415238706',
        card_month: '09',
        card_year: '2021',
        card_cvv: '333'
    }
    await app.openBrowser();
    await app.findItem('Tops/Sweaters', 'Static Sweater ');
    await app.launchPage();
    await app.addToCart('Black');
    await app.fillFormData(params);
    await app.processOrder();
})() 