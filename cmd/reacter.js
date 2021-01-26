var jojore = [
  "779273184163266571", //green
  "779272945830199296",  //black
  "779273121840103424", //blue
  "779272996728340480", //yellow
  "780376909451624468", //frozen
  "765582595080978453", //asabi
  "779270267271905280", //jerry
  "765582983053967410", //pokerj
  "765582689109409802", //sheytan
  "765582777822740520", //e_
  "760581466940768286", //WaitWutNoMouse
  "779273259426250772", //france
  "779270343223279618", //xray
];

exports.run = (bot, msg, params, args) => {

    msg.react(jojore[Math.floor(Math.random() * jojore.length)]);
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['r', 'reaction'],
  permLevel: 0
};

exports.help = {
  name: "react",
  description: "jojo code 5",
  usage: "react"
};
