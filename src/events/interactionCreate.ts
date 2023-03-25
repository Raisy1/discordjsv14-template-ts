import { BaseInteraction } from "discord.js";
import { Event } from "../types/index.js";
import { handleInteraction } from "../util/index.js";

const event: Event = {
  execute(client) {
    client.on("interactionCreate", (interaction: BaseInteraction) => {
      handleInteraction(interaction, client);
    });
  },
};

export default event;
