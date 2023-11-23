const express = require('express');  
const app = express();
const cors = require("cors");

const dataRouter = require('./dataRouter');

//comment and try
app.use(cors());

// app.use(
//     cors({
//       origin: "http://localhost:4201",
//     })
//   );

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/data', dataRouter);

const port = 4020;
const server = app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`));
