const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = process.env.PORT || 3000;

async function fetchNews() {
  try {
    const response = await axios.get('https://krishijagran.com/feeds/?utm_source=homepage&utm_medium=browse&utm_campaign=home_browse&utm_id=homepage_browse');
    const html = response.data;
    const $ = cheerio.load(html);

    const news = $('.news-feed').find('.n-f-item.shadow-sm.align-items-center');

    const newsList = [];

    news.each((index, element) => {
      let name = '';
      $(element).find('.n-f-info').children().each((i, el) => {
        name += $(el).text().trim() + ' ';
      });
      const link = $(element).find('a').attr('href');
      const img = $(element).find('img').attr('data-src');
      const date = $(element).find('small').text().trim();

      newsList.push({
        name,
        link: "https://krishijagran.com" + link,
        img,
        date
      });
    });

    return newsList;
  } catch (error) {
    console.error(error);
    return [];
  }
}

app.get('/', async (req, res) => {
    let news = await fetchNews();
    res.json(news);
  }
)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

setInterval(async () => {
  console.log("Updating news...");
  let updatedNews = await fetchNews();
}, 5 * 60 * 1000);