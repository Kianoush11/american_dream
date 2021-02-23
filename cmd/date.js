const Discord = require('discord.js')

var currentDateAndTime = new Date().toLocaleString(); //"8/5/2019, 2:30:41 PM"
var currentDate = new Date().toLocaleDateString(); //"8/5/2019"
var currentTime =   new Date().toLocaleTimeString();//"2:31:56 PM"


exports.run = (bot, msg, params) => {

  var invite = new Discord.RichEmbed()

         .setTitle("Current Time :")
         .setDescription(currentDateAndTime)
         .setFooter("P A S C A L")
        
          .setColor("0x#FF0000")

  msg.channel.send({embed: invite});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "time",
  description: "Bot Info",
  usage: "time"
};
