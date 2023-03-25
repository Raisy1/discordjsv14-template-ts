import path from "path";
import { fileURLToPath } from "url";
import handleInteraction from "./HandleInteraction.js";
import logger from "./logger.js";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
export { handleInteraction, logger };
