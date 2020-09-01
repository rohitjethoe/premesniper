const puppeteer = require('puppeteer-firefox');
const axios = require('axios');

const app = {
    browser: null,
    page: null,
    url: '',
    openBrowser: async () => {
        app.browser = await puppeteer.launch({
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
    },
    addToCart: async (color) => {
        if (color !== "" && color) {
            await app.page.click(`a[data-style-name="${color}"]`);
        }
        await app.page.waitFor(100);
        await app.page.click('input[name="commit"]');
        await app.page.waitFor(100)
        await app.page.click('a.checkout', { delay: 50 });    
    },
    fillFormData: async (params) => {
        await app.page.waitFor('#order_billing_name');
        await app.page.type('#order_billing_name', params.name, { delay: Math.random * 10 });
        await app.page.type('#order_email', params.email, { delay: Math.random * 10 });
        await app.page.type('.order_tel input', params.phone, { delay: Math.random * 10 });
        await app.page.type('#bo', params.address, { delay: Math.random * 10 });
        await app.page.type('#order_billing_city', params.city, { delay: Math.random * 10 });
        await app.page.type('#order_billing_zip', params.zip, { delay: Math.random * 10 });
        await app.page.select('#order_billing_country', params.country_code);
    }
}

module.exports = app;