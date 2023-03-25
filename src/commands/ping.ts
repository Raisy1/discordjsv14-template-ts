import { SlashCommandBuilder } from "discord.js";
import { Command } from "../types/index.js";

const command: Command = {
  slash_data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("pingpong!!"),
  execute(interaction) {
    interaction.channel.send(`Pong, ${interaction.client.ws.ping} ms!`);
  },
};

export default command;
