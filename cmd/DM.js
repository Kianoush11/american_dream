const Discord = require('discord.js')

var Rendom = [
"Fuck u <:normal:779270062087077908>", 
"I love yo xoxo <:normal:779270062087077908>", 
"So,I'm Here and glad to see you <:normal:779270062087077908>"
];



exports.run = (bot, msg, params) => {

   
 msg.author.send(Rendom[Math.floor(Math.random() * Rendom.length)]);
 msg.react("✅");
  


};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: "dm",
    description: "dm",
    usage: "dm"
  };