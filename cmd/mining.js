const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  var invite = new Discord.RichEmbed()
     
    .setImage('https://cdn.discordapp.com/attachments/760919453327294494/786644478546673744/hoyo.jpeg')
    .setFooter("Mining in discord channels? what the heck...")
    .setColor("0x#2C3E50")
  msg.channel.send({embed: invite});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mining'],
  permLevel: 0
};

exports.help = {
  name: "mine",
  description: "Bot Info",
  usage: "about"
};
