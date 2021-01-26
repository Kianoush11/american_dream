const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  var invite = new Discord.RichEmbed()

          .setTitle("Minecraft")
          .setImage('https://cdn.https://cdn.discordapp.com/attachments/788082969302007838/801769363438436382/capsule_616x353.jpg.com/attachments/788082969302007838/801769077814853652/0fe20042_0bb8_4781_82f4_7130f928b021.jpg')
          .setFooter("G R Ξ Ξ N H I L L S")
          .setColor('#ECE614')
          //<:frozen:780376909451624468>
  msg.channel.send({embed: invite});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: "embed",
  description: "Bot Info",
  usage: "about"
};
