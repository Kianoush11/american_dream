var Responses = [
  "Yes You Love it <:normal:779270062087077908>:heart:",
  "No bro that's not ur type <:e_:765582777822740520>",
  "You very love that,it's legend! <:jerry:779270267271905280>",
  "Fuck it man <:asabi:765582595080978453>",
];

exports.run = (bot, msg, params) => {

  if(!params[0]){
    return msg.channel.send(":x:  " + "| Error : Please type your love's name after command")
}

if (params[0]) {
  msg.channel.send(Responses[Math.floor(Math.random() * Responses.length)]);
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "love",
  description: "say user love/very love/no love/fuck it",
  usage: "love [text]"
};
