const Discord = require('discord.js')


const abc = [
 
    "<:harhar:806054502519799859>:middle_finger:",
    "داوش خواهشا کص نگو",
    "چرا باید فحش بدم؟",
    "نظرت چیه درخت تو کونت کنم؟",
    "دولتو بکَنم؟",
    "کیرمو بخور داوشی",
    "داش از کد های من استفاده نکن فعلا کار دارم",
    "تو هردو طرف دعوا کردم",
    "پدرت خورده شد یام یام",
    "مطالب طنز؟",
    "بکیرم",
    "ای لعنت به خاندانت کار دارم تگم نکن",
    "زارت",
    "داش ریدی داشتم با یه بات دیه رل میزدم نمیبخشمت",
    "کاوه تو کونت کنه",
    "سیک",
    "کون بده",
    "<:piker:813762302741446677>",
    "<:piker:813762302741446677>..."
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

  msg.channel.send(abc[Math.floor(Math.random() * abc.length)]);

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
  name: "fosh",
  description: "Bot Info",
  usage: "fosh"
};
