import { Client, Collection } from "discord.js";
import { __dirname } from "./util/index.js";
import { commandHandler, eventHandler } from "./handlers/index.js";
import { config } from "dotenv";
import { Command } from "./types/index.js";

config();

const client = new Client({
  intents: ["Guilds", "GuildMessages", "GuildMembers", "MessageContent"],
});

client.commands = new Collection<string, Command>();

eventHandler(client);
commandHandler(client);

client.login(process.env.BOT_TOKEN);
