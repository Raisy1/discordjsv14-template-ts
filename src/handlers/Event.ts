import { join } from "path";
import { __dirname } from "../util/index.js";
import { readdirSync } from "fs";
import { Event } from "../types/index.js";

export default (client) => {
  const eventsDir = join(__dirname, "../events");
  readdirSync(eventsDir).forEach(async (file) => {
    const eventFile: Event = await import(`../events/${file}`).then(
      (m) => m.default
    );

    try {
      eventFile.execute(client);
    } catch (err) {
      console.log(`Error during executing event: ${err}`);
    }
  });
};
