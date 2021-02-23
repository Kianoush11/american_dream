const Discord = require('discord.js')

var caty = [
    "https://cdn.discordapp.com/attachments/785933875158450217/785934213106499594/205263_587.jpg", 
    "https://cdn.discordapp.com/attachments/785933875158450217/785934213270208572/205253_257.jpg", 
    "https://cdn.discordapp.com/attachments/785933875158450217/785934213433393172/---.jpg", 
    "https://cdn.discordapp.com/attachments/785933875158450217/785934213739708426/--8.jpg", 
    "https://cdn.discordapp.com/attachments/785933875158450217/785934969981763614/265730_762.jpg", 
    "https://cdn.discordapp.com/attachments/785933875158450217/785934970191085598/268541_630.jpg", 
    "https://cdn.discordapp.com/attachments/785933875158450217/785934970400931860/268536_919.jpg", 
    "https://cdn.discordapp.com/attachments/785933875158450217/785934970584825876/Funny-kitten-1.jpg", 
    "https://cdn.discordapp.com/attachments/785933875158450217/785934971185266708/6giqv6zjkog21.jpg", 
    "https://cdn.discordapp.com/attachments/785933875158450217/785936434326536243/beautifull-cats-18.jpg", 
    "https://cdn.discordapp.com/attachments/785933875158450217/785936434523275294/265729_496.jpg", 
    "https://cdn.discordapp.com/attachments/785933875158450217/785936434892111952/205273_807.jpg", 
    "https://cdn.discordapp.com/attachments/785933875158450217/785936942750498836/0.902901001283004711_irannaz_com.jpg", 
    "https://cdn.discordapp.com/attachments/785933875158450217/785937185483784212/205246_963.jpg"
  ];

  var Quote = [
    "A Beautiful Cat", 
    "Oh,God! look at this :heart_eyes:", 
    "How are you,garfield?", 
    "my real talking kitty!", 
    "Meow Meow :cat:"
  ];
  
  exports.run = (bot, msg, params) => {

    var invite = new Discord.RichEmbed()
     .setTitle(Quote[Math.floor(Math.random() * Quote.length)])
     .setImage(caty[Math.floor(Math.random() * caty.length)])
     .setFooter("P A S C A L")
     .setColor('RANDOM')

      msg.channel.send({embed: invite});
  
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kitten', 'kitty'],
    permLevel: 0
  };
  
  exports.help = {
    name: "cat",
    description: "cat photos",
    usage: "cat"
  };
  