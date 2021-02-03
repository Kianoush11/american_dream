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


  //var invite = new Discord.RichEmbed()
          //.setTitle("**𝐺𝑟𝑒𝑒𝑛𝐻𝑖𝑙𝑙𝑠**", true)
          //.addField("__**" + "Developed In : " + "**__", ":flag_ir: by Kavisho with :heart:", true)
          //.setFooter("𝐺𝑟𝑒𝑒𝑛𝐻𝑖𝑙𝑙𝑠")
          //.setColor('RANDOM')
          //<:frozen:780376909451624468>
  msg.channel.send("<:harhar:806054502519799859>:beer:");
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
