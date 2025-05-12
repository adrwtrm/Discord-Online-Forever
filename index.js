const Eris = require("eris");
const keep_alive = require('./keep_alive.js');

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

bot.on("ready", () => {
  console.log("Bot is ready!");
  
  // Set the status
  bot.editStatus("online", {
    name: "$5 UBEREATS IN BIO",
    type: 0 // 0 = Playing
  });
});

bot.on("error", (err) => {
  console.error(err);
});

bot.connect();
