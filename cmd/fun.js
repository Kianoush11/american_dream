const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  var invite = new Discord.RichEmbed()

          .setTitle("**P A S C A L**", true)
          .addField("**" + "Talking by bot : " + "**", " :open_mouth: g.speak", false)
          .addField("**" + "Shir ya Khat : " + "**", " :coin: g.coin", false)
          .addField("**" + "Dice : " + "**", " :six: g.dice", false)
          .addField("**" + "Cat Photos :" + "**", " :cat: g.cat", false)
          .addField("**" + "Dog Photos :" + "**", " :dog: g.dog", false)
          .addField("**" + "Gift Generator :" + "**", " :gift: g.gen", false)
          .addField("**" + "Wallpapers :" + "**", " :cat: g.wallpaper", false)
          .addField("**" + "Your Love to that thing : " + "**", " :heart: g.love", false)
          .setColor('RANDOM')
          .setFooter("P A S C A L")
          

  msg.channel.send({embed: invite});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "fun",
  description: "Bot Info",
  usage: "abouttttt"
};







