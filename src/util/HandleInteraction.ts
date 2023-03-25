import { BaseInteraction, Client } from "discord.js";

export default (interaction: BaseInteraction, client: Client) => {
  if (interaction.isChatInputCommand()) {
    try {
      const command = client.commands.get(interaction.commandName);
      command.execute(interaction);
    } catch (err) {
      console.log(`Error during executing command: ${err}`);
    }
  }
};
