var jojocol = [
    "<:green:779273184163266571>", 
    "<:black:779272945830199296", 
    "<:blue:779273121840103424>", 
    "<:yellow:779272996728340480>", 
    "<:frozen:780376909451624468>"
  ];
  
  exports.run = (bot, msg, params) => {
  
      msg.channel.send(jojocol[Math.floor(Math.random() * jojocol.length)]);
  
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: "color",
    description: "jojo code 3",
    usage: "color"
  };
  