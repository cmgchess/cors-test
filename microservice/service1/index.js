const express = require('express');
const app = express();

app.get('/service1/hello', (req, res) => {
  console.log('service1/hello called');
  res.send({
    message: 'Hello from service 1!'
  });
});
const port = 4001;
app.listen(port, () => {
  console.log(`Service 1 listening at http://localhost:${port}`);
});
