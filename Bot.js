
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const request = require("request");
const url = "http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true";
const ytdl = require("ytdl-core");
const fs = require("fs");
const getYoutubeID = require("get-youtube-id");
const fetchVideoInfo = require("youtube-info");
const prefix = config.prefix;



client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});
client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});
client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});


client.on("message", message =>{
  const mess = message.content.toLowerCase();
  const member = message.member;
  const args = message.content.split(' ').slice(1).join(' ');

  if(mess.startsWith(prefix+"shiba")){
    request(url,function(error,response,body){
      var data = JSON.parse(body);
      message.channel.send("Shiba Inu",{file:data[0]});
    })
  }
})






client.login(config.token);