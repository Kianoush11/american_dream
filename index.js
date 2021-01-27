const Discord = require("discord.js");
const bot     = new Discord.Client({fetchAllMembers: true});
const fs      = require("fs");
const moment  = require("moment");



const log = (msg) => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${msg}`);
};

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
fs.readdir("./cmd/", (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./cmd/${f}`);
    log(`Loading Command: ${props.help.name}`);
    bot.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      bot.aliases.set(alias, props.help.name);
    });
  });
});


bot.on("message", msg => {

  var prefix = ("g.");

  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  if (msg.channel.type == "dm") return;

  let command = msg.content.split(" ")[0].slice(prefix.length);
  let params = msg.content.split(" ").slice(1);
  let perms = bot.elevation(msg);
  let cmd;

  if (bot.commands.has(command)) {
    cmd = bot.commands.get(command);
  } else if (bot.aliases.has(command)) {
    cmd = bot.commands.get(bot.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return msg.channel.send("You not have permissions to use this command");
     cmd.run(bot, msg, params, perms, prefix);
  }
  
});

bot.on("message",message=>{
  //DMALL
  if(message.author.equals(bot.user)) return;
  if (message.author.bot) return; 
  let MessageArr = message.content.split(" ");
  let cmd = MessageArr[0];
  let args = MessageArr.slice(1);
  if(cmd == "g.9393902"){
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: | You not have enough Permission to do that.");
      let messagee = args.join(" ");
      if(!messagee) return message.channel.send(":x: | Cannot Send Blank Message");
      else{
          message.guild.members.forEach(member=>{
              member.send(messagee).then(()=>{
                  console.log("sent mesasge to: "+member.user.tag+" Successfully");
              }).catch(function(){
                  console.log("An error occured to dm: "+member.user.tag+".");
              });
          })
      }
  }
});



bot.on("message",message=>{

  const name = message.author.username;
  const talkedRecently = new Set();

  if (message.content === 'g.hub') {

    if (talkedRecently.has(message.author.id)) {
      message.channel.send("یوزر گرامی لطفا بعدا دوباره تلاش کنید - " + message.author);
  } else {
    var role = message.guild.roles.find(role => role.id === "803653309755162634");
    message.author.addRole(role);
    message.react('☑️');
    message.channel.send(name + " Aziz hub shoma sakhteh mishavad.")
    message.guild.createChannel(name + "-hub", {
      type: 'text',
      overwritePermissions: [
        {
          id: message.guild.id,
          allow: ['SEND_MESSAGES'],
      },
      {
          id: message.author.id,
          allow: ['MANAGE_CHANNELS'],
      },
      ]
    }).then(channel => {
      setTimeout(() => {
        channel.send("هاب شما ساخته شد \n حتما چنل خود را به میل خود تنظیم کنید \n مطالب غیر اخلاقی پست نکنید \n هاب خود را مثبت هجده و یا حالت اخبار نکنید \n و اگر فعالیت کنید تیک میگیرید و اگر نه چنل شما پاک میشه");
      }, 5000);
      setTimeout(() => {
        const catcat = '803631413127282739'
        channel.setParent(catcat);
    }, 5000);
    
    });
    
     // Adds the user to the set so that they can't talk for a minute
     

  };

  talkedRecently.add(message.author.id);
     setTimeout(() => {
       // Removes the user from the set after a minute
       talkedRecently.delete(message.author.id);
     }, 8000000);
}
  

});
 
//.then(channel => {
    
  //channel.overwritePermissions(message.author.id, {VIEW_CHANNEL: true});
  //channel.overwritePermissions(message.author.id, {MANAGE_CHANNEL: true});
  //channel.overwritePermissions(message.author.id, {SEND_MESSAGES: true});
  //channel.overwritePermissions(message.author.id, {MANAGE_MESSAGES: true});
  //channel.overwritePermissions(message.author.id, {ATTACH_FILES: true});
  //channel.overwritePermissions(message.author.id, {READ_MESSAGE_HISTORY: true});
  //channel.overwritePermissions(message.author.id, {USE_EXTERNAL_EMOJIS: true});
  //channel.overwritePermissions(everyoneRole, {SEND_MESSAGES: false});
  //channel.setParent('803631413127282739');
//});







bot.on('message', message => {
  //PING
  if (message.content === 'g.ping') {  
    message.channel.send(`Pong🏓! Latency is ${Date.now() - message.createdTimestamp}ms.`);
  }
});

bot.on("ready", () => {

  //ACTIVE
  log(`Ready to serve ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} servers.`);
  log('Im ready');
  setInterval(() => {
    targetGuild = bot.guilds.get('787718236783247371')
    if(targetGuild) {
        bot.user.setActivity('GreenHills Members : ' + targetGuild.memberCount , {type: 'WATCHING'})
              .then(console.log)
              .catch(console.error);
    }
}, 1000 * 60 * 5);
});

bot.on("error", console.error);
bot.on("warn", console.warn);


bot.login(process.env.token);

bot.on('disconnect', function(erMsg, code) {
  console.log('----- Bot disconnected from Discord with code', code, 'for reason:', erMsg, '-----');
  bot.connect(process.env.token);
});

bot.reload = function (command) {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./cmd/${command}`)];
      let cmd = require(`./cmd/${command}`);
      bot.commands.delete(command);
      bot.aliases.forEach((cmd, alias) => {
        if (cmd === command) bot.aliases.delete(alias);
      });

      bot.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        bot.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

bot.elevation = function (msg) {
  /* This function should resolve to an ELEVATION level which
     is then sent to the command handler for verification*/
  let permlvl = 0;

  let mod_role = msg.guild.roles.find("name", "Members");
  if (mod_role && msg.member.roles.has(mod_role.id)) permlvl = 2;

  let admin_role = msg.guild.roles.find("name", "Can Use GH Bot cmds");
  if (admin_role && msg.member.roles.has(789036377056477184)) permlvl = 3;

  if (msg.author.id === "750008103096942683") permlvl = 4;
  return permlvl;
};
