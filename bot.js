const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("678597998737096704")
setInterval(function() {
channel.send(`Allah akpr الله اكبر`);
}, 30)
})

client.login(process.env.BOT_TOKEN);