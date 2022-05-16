import DiscordJS, { Intents } from "discord.js";
import dotenv from "dotenv";
import "dotenv/config";

dotenv.config();

const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log("Bot jest gotowy");
});
const MojID: string = "134293902919335936";
const KonradID: string = "502163877707120650";
const GniewkoID: string = "126779546409107456"; //"126779546409107456";
client.on("messageCreate", (message) => {
  if (
    message.author.id === KonradID &&
    message.channelId === "772714846575263764" /*PadokF1*/
  ) {
    message.reply({
      content: "Kto pytał",
    });
  } else if (message.author.id === GniewkoID) {
    message.react("♻");
  }
});

client.login(process.env.TOKEN);
