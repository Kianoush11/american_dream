const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

    var invite = new Discord.RichEmbed()
        .setFooter("More ID Commands - g.id")
        .setDescription("Name : " + msg.guild.name, true)
        .addField("ID : " + msg.guild.id, true)
        .setColor('RANDOM')
        .setFooter("G R Ξ Ξ N H I L L S")



  msg.channel.send({embed: invite});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sid'],
  permLevel: 0
};

exports.help = {
  name: "serverid",
  description: "Gives ID of channel",
  usage: "id"
};
