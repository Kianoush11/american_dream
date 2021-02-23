const Discord = require('discord.js')


const ab = [
   
    "شما یه لیوان آب انگور زدی", 
    "آب کیر خوبی بود", 
    "عرق نخور", 
    "عجب ویسکی ای زدی ناموسا", 
    "دلستر لیمویی میخوری بعد جوگیر میشی؟",

];

const talkedRecently = new Set();

exports.run = (bot, msg, params) => {

    
    if (talkedRecently.has(msg.author.id)) {
        msg.react('❌');
} else {

  msg.channel.send("<:piker:813762302741446677>:beer:");
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
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "drink",
  description: "Bot Info",
  usage: "drink"
};
