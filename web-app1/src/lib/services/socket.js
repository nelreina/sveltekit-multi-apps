import { base } from "$app/paths";

import { io } from "socket.io-client";
export const socket = io("/", {
  path: `${base}/socket.io`,
});
