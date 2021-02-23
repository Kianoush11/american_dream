const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  var invite = new Discord.RichEmbed()

      .setTitle("**Tools**")
      .addField("**" + "Pick a random number" + "**", " g.number", true)
      .addField("**" + "Make a vote" + "**", " g.vote", false)
      .addField("**" + "Reminder" + "**", "g.timer", false)
      .addField("**" + "User Info" + "**", " g.userinfo", false)
      .addField("**" + "Highlighter" + "**", " :rotating_light: g.highlight", false)
      .addField("**" + "Aparat Account Info" + "**", " g.aparat", false)  
	    .setFooter("P A S C A L")
      .setColor("RANDOM")

  msg.channel.send({embed: invite});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "tools",
  description: "get cats",
  usage: "help"
};
