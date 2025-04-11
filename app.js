const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();

app.use(loggerMiddleware);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log("Saraswat Acharyya")
});
