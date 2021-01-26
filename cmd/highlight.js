exports.run = (bot, msg, params) => {

  msg.delete();

  if(!params.join(" ")){
    return msg.channel.send(":x:  " + "| Error : Please Type Some Text To Highlight it.")
  }
  msg.channel.send("```" + params.join(" ") + "```");

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hl'],
  permLevel: 0
};

exports.help = {
  name: "highlight",
  description: "Highlight the text",
  usage: "highlight [TEXT]"
};
