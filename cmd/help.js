const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  var invite = new Discord.RichEmbed()

      .setTitle("**Sir,How i can help you?**")
      .addField("**" + " Fun & Meme :laughing: " + "**", "  g.fun", true)
      .addField("**" + " Tools :tools: " + "**", " g.tools", false)
      .addField("**" + " Moderation :closed_lock_with_key:" + "**", "g.mod", false)
		  .addField("**" + " WaitWut <:normal:779270062087077908> " + "**", " g.wat ", false)
		  .setFooter("P A S C A L")
      .setColor("0x#295d7f")

  msg.channel.send({embed: invite});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "help",
  description: "get cats",
  usage: "help"
};
