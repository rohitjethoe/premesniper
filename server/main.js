const { firefox } = require('playwright');
const axios = require('axios');

const app = {
    browser: null,
    page: null,
    url: '',
    openBrowser: async () => {
        app.browser = await firefox.launch({
            headless: false
        });
        app.page = await app.browser.newPage();
    },
    findItem: async (categories, query) => {
        await axios.get("https://www.supremenewyork.com/shop.json")
        .then((res) => {
            let data = res.data;
            if (categories || categories !== "") {
                let category = data['products_and_categories'][categories];

                for (item in category) {
                    if (category[item]['name'].includes(query)) { 
                        let itemId = category[item]['id'];
                        app.url = `https://www.supremenewyork.com/shop/${itemId}`;
                    }
                }
            }
        })
    },
    launchPage: async () => {
        app.url !== '' ? await app.page.goto(app.url) : await app.page.goto('https://www.supremenewyork.com/shop');
    }
}

module.exports = app;