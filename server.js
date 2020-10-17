const Discord = require("discord.js");
const http = require("http");
const express = require("express");
const { TOKEN, YT_API_KEY, prefix, devs } = require("./config");
const client = new Discord.Client();
client.login(TOKEN);

const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://laser-indecisive-spring.glitch.me/`);
}, 280000);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
/////
//////
 
 
 client.on('ready' , () => {
var join = client.channels.get("763508649742041115")
if (join) join.join()
 
 
})




////////

client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(`Reklamakat kra tosh am servara reklam bka
@everyone/.https://discord.gg/BpaTCAZ`)
    
  client.channels.get("766827523895984188").send(
`> Nerdra la layan <@${message.author.id}> 
${message.content}`)
}
    }
        })


////


////
////////
/////////
client.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "join") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**kra. ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- bcho zhwrekawa !**");
    }
  }
});

/////////

//////////
client.on("ready", () => {
  console.log(`----------------`);
  console.log(`Desert Bot- Script By : osama tech`);
  console.log(`----------------`);
  console.log(
    `ON ${client.guilds.size} Servers '     Script By : someone dev ' `
  );
  console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`FT UP`, "online"); /// تعديل مهم حط بدل هلو حالة البوت
  client.user.setStatus("online");
});
////////

const discord = require("discord.js");


module.exports = {
  name: "invite",
  category: "info",
  description: "Get the invite link of the bot",
  run: async (client, message, args) => { 
  
    let embed = new discord.MessageEmbed()
    .setTitle('HERE INVITE LINK OF BOT')
    .setDescription(`[CLICK HERE](https://discord.com/api/oauth2/authorize?client_id=766380917904113664&permissions=8&scope=bot)`)
    .setColor("RANDOM")
    .setFooter(`Bot made by hama`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel.send(embed)
    
    
  }
}