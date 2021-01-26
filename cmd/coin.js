var hd = [
  " شیر ",
  " خط "
];

exports.run = (bot, msg, params) => {

  msg.channel.send(msg.author.toString() + (hd[Math.floor(Math.random() * hd.length)]));

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['flip'],
  permLevel: 0
};

exports.help = {
  name: "coin",
  description: "flip a coin",
  usage: "coin"
};
