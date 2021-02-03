const Discord = require('discord.js')

exports.run = (bot, message, params, text) => {

    const usermention = message.mentions.users.first()

    const rang = ['بیخایه','سعادتمند','مهربان','بدردنخور','بگوزن دهنش','به تو یکی ربط نداره','ارور 404']
    const payam = [
        'یک اکانت نیترو دار که هنوز یوز نکرده', 
        'فقط هایپ اسکواد', 
        'زارت چیزی نداره که', 
        'یه انبار کد نیترو داره', 
        'اسپاتیفایش پرمیومه', 
        'نیترو کلاسیک داره', 
        'ارور 404'
    ]
    const site  = [
        ' Site : pornhub.com',
        ' Site : sexVideos.com',
        ' Site : kosnx.com',
        'Shad.medu.ir',
        ' Site : brazzers.com',
        ' Site : sex.com',
        ' Site : porneslami.com',
        ' Site : khamenei.ir', 
        'ارور 404'
    ]


    const aks = [
        'https://cdn.discordapp.com/attachments/788504536565940234/796756383521177621/1053500x666_1402901217520745.png',
        'https://cdn.discordapp.com/attachments/790584127564283918/796754575117254716/0.png',
        'https://cdn.discordapp.com/attachments/788504536565940234/796756634214203412/10531436276043668511.png',
        'https://cdn.discordapp.com/attachments/788504536565940234/796756678275629138/9k.png',
        'https://cdn.discordapp.com/attachments/788504536565940234/796756910128496730/50d73e49462c23e88b2a1ef3cf9dca5d.png',
        'https://cdn.discordapp.com/attachments/788504536565940234/796757037005668362/10531402901241173046.png',
        'https://cdn.discordapp.com/attachments/788504536565940234/796757190710132746/1396867704563060.png',
        'https://cdn.discordapp.com/attachments/733432607710117951/796798254116503602/unnamed.jpg',
        'https://cdn.discordapp.com/attachments/733432607710117951/796798301902864414/ax-khande-dar-khafan-2.jpg',
        'https://cdn.discordapp.com/attachments/733432607710117951/796798332847783956/images_10.jpeg',
        'https://cdn.discordapp.com/attachments/790584127564283918/796800591950118963/unnamed_1.png',
        'https://cdn.discordapp.com/attachments/790584127564283918/796800630600499210/8049974_274.png',
        'https://cdn.discordapp.com/attachments/790584127564283918/796800767381340170/funny-photos-3-namakstan.png',
    ]

    const result1 = Math.floor(Math.random() * rang.length);
    const result2 = Math.floor(Math.random() * payam.length);
    const result3 = Math.floor(Math.random() * 9999 + 1)
    const result4 = Math.floor(Math.random() * 89 + 10)
    const result5 = Math.floor(Math.random() * 9999999 + 1)
    const result6 = Math.floor(Math.random() * site.length);
    const result7 = Math.floor(Math.random() * 99999 + 1)
    const result8 = Math.floor(Math.random() * aks.length);
    
    if(!usermention){
        message.channel.send('لــــطفا یک نفـر را منشن کنیـــــــد.')
    }
    else{
message.channel.send(`هک کـــردن** این ممبر شروع شد**`+`\t **${usermention.username}**`)
.then((msg)=> {
  setTimeout(function(){
    msg.edit(`**بـــزار بگــردم ببــینم چیــا داره**`);
    setTimeout(function(){
        msg.edit(`**${payam[result2]}**`);
        setTimeout(function(){
            msg.edit(`نوع اخلاق طرف :\t **${rang[result1]}**`);
            setTimeout(function(){
                msg.edit(`ایمیل اکانت دیسکوردش\t`+`**${usermention.username}`+`${result3}@gmail.com**`);
                setTimeout(function(){
                    msg.edit(`شــماره اکانتش \t **09${result4}${result5}**`);
                    setTimeout(function(){
                        msg.edit(`آخرین سایتایی که رفته :\t  **${site[result6]}**`);
                        setTimeout(function(){
                            msg.edit(`رمز کامپیوترش \t **${result7}**`);
                            setTimeout(function(){
                                msg.edit(`عکس لو رفــته ازش` + `${aks[result8]}`);
                                setTimeout(function(){
                                    msg.edit(`<:kachal:788678025037479946> **وای صاحب اک اومد**`);
                                    setTimeout(function(){
                                        msg.edit("هــک کردن این یارو تموم شد");
                                      }, 2000)
                                  }, 2000)
                              }, 2000)
                          }, 2000)
                      }, 2000)
                  }, 2000)
              }, 2000)
          }, 2000)
      }, 2000)
  }, 2000)
});
    };


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hak'],
  permLevel: 0
};

exports.help = {
  name: "hack",
  description: "Bot Info",
  usage: "about"
};
