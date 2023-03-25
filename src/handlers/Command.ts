import { join } from "path";
import { readdirSync } from "fs";
import { __dirname } from "../util/index.js";
import { Client, REST, Routes, SlashCommandBuilder } from "discord.js";
import { Command } from "../types/index.js";
import { config } from "dotenv";
config();

const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);
const slashDatas = [];

export default (client: Client) => {
  const commandsDir = join(__dirname, "../commands");

  readdirSync(commandsDir).forEach(async (file) => {
    const command: Command = await import(`../commands/${file}`).then(
      (m) => m.default
    );

    if (command.slash_data instanceof SlashCommandBuilder)
      slashDatas.push(command.slash_data.toJSON());
    else slashDatas.push(command.slash_data);
    client.commands.set(command.slash_data.name, command);

    //Push Slash Commands to Discord
    if (process.env.ENV === "dev") {
      const data = await rest.put(
        Routes.applicationGuildCommands(
          process.env.CLIENT_ID,
          process.env.DEV_GUILD_ID
        ),
        { body: slashDatas }
      );
      console.log("Commands Loaded successfully");
    } else if (process.env.ENV === "prod") {
      const data = await rest.put(Routes.applicationCommands(client.user.id), {
        body: slashDatas,
      });
      console.log("Commands Loaded successfully");
    }
  });
};
