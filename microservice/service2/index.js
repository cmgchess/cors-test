const express = require('express');
const app = express();

app.get('/service2/hello', (req, res) => {
  console.log('service2/helsslso called');
  res.send({
    message: 'Hellosaa from service 2!'
  });
});
const port = 4002;
app.listen(port, () => {
  console.log(`Service 2 listening at http://localhost:${port}`);
});