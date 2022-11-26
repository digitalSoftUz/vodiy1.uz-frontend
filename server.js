const express = require('express');
const path = require('path');
const fs = require("fs");
const app = express();
const axios = require('axios')
const PORT = process.env.PORT || 5000;
const indexPath = path.resolve(__dirname, 'build', 'index.html');
const router = express.Router()


router.get('/news/:id', (req, res, next) => {
  fs.readFile(indexPath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('Error during file reading', err);
      return res.status(404).end()
    }
    axios.get(`https://admin.vodiy1.uz/api/findone/${req.params.id}`).then(

      function (response) {
        const post = response.data.data
        htmlData = htmlData.replace(
          "<title>Vodiy va O'zbekiston yangiliklari, eng tezkor xabarlar, qiziqarli maqolalar - VODIY1.UZ</title>",
          `<title>${post.title_ru}</title>`
        )
          .replace('__META_OG_TITLE__N', post.title_ru)
          .replace('__META_DESCRIPTION__N', post.title_ru)
          .replace('__META_OG_DESCRIPTION__N', post.title_ru)
          .replace('__META_OG_IMAGE__N', `https://admin.vodiy1.uz/${post.img}`)
          .replace('__META_OG_TITLE__I', post.title_ru)
          .replace('__META_DESCRIPTION__I', post.title_ru)
          .replace('__META_OG_IMAGE__I', `https://admin.vodiy1.uz/${post.img}`)
          .replace('__META_OG_TITLE__P', post.title_ru)
          .replace('__META_OG_DESCRIPTION__P', post.title_ru)
          .replace('__META_OG_IMAGE__P', `https://admin.vodiy1.uz/${post.img}`)
          .replace('__META_OG_URL__P', `https://vodiy1.uz/${req.url}`)
          .replace('__META_OG_TITLE__T', post.title_ru)
          .replace('__META_OG_DESCRIPTION__T', post.title_ru)
          .replace('__META_OG_IMAGE__T', `https://admin.vodiy1.uz/${post.img}`)
          .replace('__META_IMAGE__', `https://admin.vodiy1.uz/${post.img}`)
        res.send(htmlData);
      }).catch(function (response) {
        res.status(404).send("Post not found");
      });

  });
});


router.get("/*", (req, res, next) => {
  fs.readFile(indexPath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('Error during file reading', err);
      return res.status(404).end()
    }
    htmlData = htmlData
      .replace('__META_OG_TITLE__N', "Vodiy va O'zbekiston yangiliklari, eng tezkor xabarlar, qiziqarli maqolalar - VODIY1.UZ")
      .replace('__META_OG_DESCRIPTION__N', "Vodiy va O'zbekiston yangiliklari, eng tezkor xabarlar, qiziqarli maqolalar - VODIY1.UZ")
      .replace('__META_OG_IMAGE__N', ``)
      .replace('__META_OG_TITLE__I', "Vodiy va O'zbekiston yangiliklari, eng tezkor xabarlar, qiziqarli maqolalar - VODIY1.UZ")
      .replace('__META_DESCRIPTION__I', "Vodiy va O'zbekiston yangiliklari, eng tezkor xabarlar, qiziqarli maqolalar - VODIY1.UZ")
      .replace('__META_OG_IMAGE__I', ``)
      .replace('__META_OG_TITLE__P', "Vodiy va O'zbekiston yangiliklari, eng tezkor xabarlar, qiziqarli maqolalar - VODIY1.UZ")
      .replace('__META_OG_DESCRIPTION__P', "Vodiy va O'zbekiston yangiliklari, eng tezkor xabarlar, qiziqarli maqolalar - VODIY1.UZ")
      .replace('__META_OG_IMAGE__P', ``)
      .replace('__META_OG_URL__P', `https://vodiy1.uz/${req.url}`)
      .replace('__META_OG_TITLE__T', "Vodiy va O'zbekiston yangiliklari, eng tezkor xabarlar, qiziqarli maqolalar - VODIY1.UZ")
      .replace('__META_OG_DESCRIPTION__T', "Vodiy va O'zbekiston yangiliklari, eng tezkor xabarlar, qiziqarli maqolalar - VODIY1.UZ")
      .replace('__META_OG_IMAGE__T', ``)
    res.send(htmlData);
  });
});

app.use("/", router);

app.listen(PORT, (error) => {
  if (error) {
    return console.log('Error during app startup', error);
  }
  console.log("listening on " + PORT + "...");
})