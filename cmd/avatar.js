const ms = require('ms')

exports.run = async (bot, msg, params) => {

  var get_message = await msg.channel.send("Sending...");
  let target = msg.mentions.users.first() || msg.author;

  await msg.channel.send({files: [
    {
      attachment: target.displayAvatarURL,
      name: "avatar.png"
    }
  ]});
  
  get_message.delete();

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pic', 'picture'],
  permLevel: 0
};

exports.help = {
  name: "avatar",
  description: "Sends Avatar of Mentioned User",
  usage: "avatar [@MENTION]"
};
