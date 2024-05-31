const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:9000",
      pathRewrite: { "^/api/": "/" }, // /api/*を/*に書き換え
      changeOrigin: true,
    })
  );
};
