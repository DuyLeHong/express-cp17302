const express = require('express')
const app = express()
const port = 3000

const expressHbs = require('express-handlebars');

app.set('view engine', '.hbs');
app.set('views', './views');

app.engine('.hbs', expressHbs.engine({
    extname: "hbs",
    defaultLayout: 'page2',
    layoutsDir: "views/layouts/",
}));

app.get('/', (req, res) => {
    res.render('home')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

