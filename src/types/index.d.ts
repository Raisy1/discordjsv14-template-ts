import {
  Client,
  Collection,
  SlashCommandBuilder,
  ChatInputCommandInteraction,
} from "discord.js";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BOT_TOKEN: string;
      ENV: "test" | "dev" | "prod";
      DEV_GUILD_ID: string;
    }
  }
}

interface Event {
  once?: boolean;
  execute: (client: Client) => any;
}

interface Command {
  slash_data: SlashCommandBuilder;
  execute: (interaction: ChatInputCommandInteraction) => void;
}

declare module "discord.js" {
  export interface Client {
    commands: Collection<string, Command>;
    cooldowns: Collection<string, number>;
  }
}

export { Event, Command };
