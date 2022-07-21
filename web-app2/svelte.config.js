import preprocess from "svelte-preprocess";
import path from "path";
const __dirname = path.resolve();

import expressAdapter from "@mankins/svelte-adapter-express";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: expressAdapter({
      serverFile: path.join(__dirname, "./adapter/express/server.js"),
    }),
    paths: { base: "/web-app2" },
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
