const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

    var invite = new Discord.RichEmbed()
       .setTitle(":x: | Error")
       .addField("Use this Codes :")
       .addField("jcid - Channel ID")
       .addField("jsid - Server ID")
       .setFooter("G R Ξ Ξ N H I L L S")
       .setColor('RANDOM')



  msg.channel.send({embed: invite});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "id",
  description: "Gives ID of channel",
  usage: "id"
};
