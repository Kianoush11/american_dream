const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  var invite = new Discord.RichEmbed()

          .addField("**" + "Random Emotes <:asabi:765582595080978453>" + "**", " g.emote", true)
          .addField("**" + "Random Colors <:green:779273184163266571>" + "**", " g.color", false)
          .addField("**" + "Random Clothes <:russia:779272858953973781>" + "**", " g.wear", false)		  
          .addField("**" + "DM you <:covered:779272800715538453>" + "**", " g.dm", false)
          .addField("**" + "Says it's true or false" + "**","g.truth", false)
          .addField("**" + "Speak by bot" + "**","g.speak", false)
          .addField("**" + "Suggest to warn/mute/kick/ban a user" + "**","g.suggest", false)
          
          .setFooter("P A S C A L")
          .setColor("0x#B73333")

  msg.channel.send({embed: invite});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "wat",
  description: "get jojo Commands",
  usage: "ojo"
};
