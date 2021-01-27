const Discord = require('discord.js')


const generator = [
    "پوچ",
    "پوچ", 
    "پوچ",
    "پوچ",
    "||https://ptb.discord.com/store/skus/518088627234930688/realm-royale||",
    "پوچ",
    "🌹 یه شاخه گل",
    "اکانت یوبی سافت",
    "پوچ",
    "اک نورد وی پی ان",
    "پوچ",
    "پوچ،ول کن دیه",
    "پوچ",
    "پدرت",
    "پوچم دهنت",
    "جانمازی",
    "پوچ",
    "پوچ", 
    "||https://ptb.discord.com/store/skus/550277544025522176/heroes-and-generals||",
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ", 
    "پوچ",
    "||https://ptb.discord.com/store/skus/519338998791929866/zombsroyale-io||", 
    "پوچ",
    " 0_0 ",
    "پوچ",
    "جایزه گرفتی بیا با هم نصف کنیم", 
    "هیچی",
    "هیچی",
    "هاشم حق گو",
    "هیچی",
    "پوچ",
    "||https://discord.com/store/applications/420676877766623232/scp-secret-laboratory||",
    "پوچ",
    "پوچ",
    "اگه این پیغام رو دیدید،به اونر سرور بگید",
    "پوچ",
    "یک بازی پولی و بدون پرداخت درون برنامه ای از مایکت | تا سقف 14 هزار تومان",
    "پوچ",
    "پوچ",
    "ساقه طلایی",
    "پوچ",
    "خیار",
    "🍌 موز",
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ", 
    "پوچ",
    "||https://ptb.discord.com/store/skus/519249930611589141/sandboxes||",
  ];
   
  //const talkedRecently = new Set();



  exports.run = (bot, msg, params) => {

    //  if (talkedRecently.has(msg.author.id)) {
      //  msg.channel.send("یوزر گرامی لطفا 5 دقیقه بعد دوباره تلاش کنید - " + msg.author);
//} else {

  var emx = new Discord.RichEmbed()
  .setTitle("**G R Ξ Ξ N . G Ξ N Ξ R A T O R**", true)
  .setDescription("این کد تا زمانی که مثل حیوون بش حمله نکنید تعطیل میباشد")
  //.setFooter("G R Ξ Ξ N H I L L S | در صورت برنده شدن به اونر و یا لیدر ها در چت پیغام دهید")
  .setColor('RANDOM') 

  msg.channel.send(emx);
  msg.react("☑️");
  

    // Adds the user to the set so that they can't talk for a minute
    //talkedRecently.add(msg.author.id);
    //setTimeout(() => {
      // Removes the user from the set after a minute
      //talkedRecently.delete(msg.author.id);
    //}, 300000);
//}

  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['gen'],
    permLevel: 0
  };
  
  exports.help = {
    name: "generator",
    description: "jojo code 3",
    usage: "suggest"
  };
  