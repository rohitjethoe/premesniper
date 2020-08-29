const App = require('./server/main');
const app = require('./server/main');

(async() => {
    await app.openBrowser();
    await app.findItem('Tops/Sweaters', 'Static Sweater ');
    await app.launchPage();
    await app.addToCart('Black');
})()