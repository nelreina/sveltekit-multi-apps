import { sveltekit } from "@sveltejs/kit/vite";
import RealTime from "./adapter/express/realtime.js";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    {
      name: "realtime",
      configureServer(server) {
        const real = RealTime(server);
        real.start();
      },
    },
  ],
};

export default config;
