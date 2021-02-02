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


  //var invite = new Discord.RichEmbed()
          //.setTitle("**𝐺𝑟𝑒𝑒𝑛𝐻𝑖𝑙𝑙𝑠**", true)
          //.addField("__**" + "Developed In : " + "**__", ":flag_ir: by Kavisho with :heart:", true)
          //.setFooter("𝐺𝑟𝑒𝑒𝑛𝐻𝑖𝑙𝑙𝑠")
          //.setColor('RANDOM')
          //<:frozen:780376909451624468>
  msg.channel.send("<:kachal:806044487675281409>smoke");
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
  aliases: ['info'],
  permLevel: 0
};

exports.help = {
  name: "smoke",
  description: "Bot Info",
  usage: "smoke"
};
