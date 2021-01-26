var dice = [
    "1", 
    "2", 
    "3", 
    "4", 
    "5", 
    "6"
  ];
  
  exports.run = (bot, msg, params) => {
  
      msg.channel.send(dice[Math.floor(Math.random() * dice.length)]);
  
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: "dice",
    description: "dice",
    usage: "dice"
  };
  