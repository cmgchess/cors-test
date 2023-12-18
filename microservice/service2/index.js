const express = require('express');
const app = express();

app.get('/service2/hello', (req, res) => {
  console.log('service2/hello called');
  res.send({
    message: 'Hello from service 2!'
  });
});
const port = 4002;
app.listen(port, () => {
  console.log(`Service 2 listening at http://localhost:${port}`);
});