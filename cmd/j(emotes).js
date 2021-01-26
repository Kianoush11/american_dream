var jojoemo = [
  "<:asabi:765582595080978453>", 
  "<:jerry:779270267271905280>", 
  "<:pokerj:765582983053967410>", 
  "<:sheytan:765582689109409802>", 
  "<:e_:765582777822740520>", 
  "<:WaitWutNoMouse:760581466940768286>", 
  "<:sad:780378414832943114>", 
  "<:frozen:780376909451624468>"
];

exports.run = (bot, msg, params) => {

    msg.channel.send(jojoemo[Math.floor(Math.random() * jojoemo.length)]);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "emote",
  description: "jojo code 1",
  usage: "jj"
};
