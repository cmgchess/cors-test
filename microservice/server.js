const http = require("http");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

const service1Proxy = createProxyMiddleware("/service1", {
  target: "http://localhost:4001",
  changeOrigin: true,
});

const service2Proxy = createProxyMiddleware("/service2", {
  target: "http://localhost:4002",
  changeOrigin: true,
});

const enableCors = cors({
  origin: "http://localhost:4200",
  methods: "GET,POST,PUT",
});
const ENABLE_CORS = true;
const server = http.createServer((req, res) => {
  if (ENABLE_CORS) {
    enableCors(req, res, () => {
      if (req.url.startsWith("/service1")) {
        service1Proxy(req, res);
      } else if (req.url.startsWith("/service2")) {
        service2Proxy(req, res);
      } else {
        res.end("Nothing here!");
      }
    });
  } else {
    if (req.url.startsWith("/service1")) {
      service1Proxy(req, res);
    } else if (req.url.startsWith("/service2")) {
      service2Proxy(req, res);
    } else {
      res.end("Nothing here!");
    }
  }
});

const port = 4020;
server.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});
