const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  var invite = new Discord.RichEmbed()

          .setTitle("**𝐺𝑟𝑒𝑒𝑛𝐻𝑖𝑙𝑙𝑠**", true)
          .addField("__**" + "Developed In : " + "**__", ":flag_ir: by Kavisho with :heart:", true)
          .addField("__**" + "Code Language : " + "**__", "Javascript <:java:785151723207393300>", false)
          .addField("__**" + "Version : " + "**__", " 1.0 :robot: ", false)
		      .addField("__**" + "Bot Status :" + "**__", "Configuring 🔧 ", true)
          .setFooter("𝐺𝑟𝑒𝑒𝑛𝐻𝑖𝑙𝑙𝑠")
          .setColor('RANDOM')
          //<:frozen:780376909451624468>
  msg.channel.send({embed: invite});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['info'],
  permLevel: 0
};

exports.help = {
  name: "about",
  description: "Bot Info",
  usage: "about"
};
