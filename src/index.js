const app = require('./app');
const port = 3000 || process.env.PORT;

app.listen(port, () => {
  console.log(`the app is listening on ${port}`);
});
