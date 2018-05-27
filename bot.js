const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});



     client.on('message', message => {

  if (message.content.startsWith(prefix + "contact")) {
  if (!message.channel.guild) return;
  let args = message.content.split(" ").slice(1).join(' ');
  client.users.get("429572530660179969").send(
      "\n" + "**" + "● السيرفر :" + "**" +
      "\n" + "**" + "» " + message.guild.name + "**" +
      "\n" + "**" + " ● المرسل : " + "**" +
      "\n" + "**" + "» " + message.author.tag + "**" +
      "\n" + "**" + " ● الرسالة : " + "**" +
      "\n" + "**" + args + "**")
  }
  });








   client.on("message", message => {
    var prefix = "+";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
                if (!message.member.hasPermission("MANGE_MESSAGES"))  return;
 if (!args[1]) {
                                let embed3 = new Discord.RichEmbed()
                                .setDescription(".clear <number>")
                                .setColor("RANDOM")
                                message.channel.sendEmbed(embed3);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let embed4 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(embed4);
                            }
                          }
});














// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
