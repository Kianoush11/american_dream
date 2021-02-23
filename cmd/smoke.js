const Discord = require('discord.js')


const ab = [
   
    "سیگار بهمن هم شد سیگار؟", 
    "عجب توتونی داره", 
    "سیگار توهمی میدی دستم خارکسه؟", 
    "واو سیگار وینستون", 




];

const talkedRecently = new Set();

exports.run = (bot, msg, params) => {

    
    if (talkedRecently.has(msg.author.id)) {
        msg.react('❌');
} else {



  msg.channel.send("<:piker:813762302741446677>:smoking:");
  msg.channel.send(ab[Math.floor(Math.random() * ab.length)]);

};

talkedRecently.add(msg.author.id);
setTimeout(() => {
   //Removes the user from the set after a minute
  talkedRecently.delete(msg.author.id);
}, 300000);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sigar'],
  permLevel: 0
};

exports.help = {
  name: "smoke",
  description: "Bot Info",
  usage: "smoke"
};
