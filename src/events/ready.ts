import { Event } from "../types/index.js";
import logger from "../util/logger.js";

const event: Event = {
  execute: (client) => {
    client.on("ready", () => {
      logger.info("Bot is ready!");
    });
  },
};

export default event;
