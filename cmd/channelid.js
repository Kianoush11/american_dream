const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

    var invite = new Discord.RichEmbed()
        .setFooter("More ID Commands - g.id")
        .setDescription(msg.channel + " ID is : " + msg.channel.id)
        .setColor("0x#FF0000")



  msg.channel.send({embed: invite});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cid'],
  permLevel: 0
};

exports.help = {
  name: "channelid",
  description: "Gives ID of channel",
  usage: "id"
};
