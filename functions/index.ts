const functions = require("firebase-functions");
const next = require("next");

const dev = false; // false for production
const app = next({ dev, conf: { distDir: "../.next" } }); // point to Next.js build folder
const handle = app.getRequestHandler();

exports.nextjsServer = functions.https.onRequest((req: any, res: any) => {
  return app.prepare().then(() => handle(req, res));
});
