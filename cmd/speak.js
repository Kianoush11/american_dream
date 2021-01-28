const { Message } = require("discord.js");

exports.run = (bot, msg, params) => {

  msg.delete();

  if(!params.join(" ")){
    return msg.channel.send("<:black:779272945830199296>" + " | Error : Please Type Some text,emoji,etc...")
  }
  msg.channel.send(`**${msg.author.username} Says :** ` + params.join(" "));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['speak', 'say'],
  permLevel: 0
};

exports.help = {
  name: "speak",
  description: "Speaking With Bot",
  usage: "speak [TEXT]"
};
