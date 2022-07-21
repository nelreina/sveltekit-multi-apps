import { socket } from "$lib/services/socket";
import { readable } from "svelte/store";

export const message = readable("", (set) => {
  socket.on("message", (data) => {
    set(data);
  });
  return () => {}; // noop
});


