const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function) {
    bot.user.setGame ("Command: *help");
    console.log("Connectedç");
});

bot.login("NDk1NTI0MjQyOTgxMzg4MzA4.D0HEhw.vpp-PrkhsSzUDAoQbPSMFg5rIiI");


bot.on ('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes : /n -*help");
    }

    if (message.content === "Salut")}
    message.reply("Salut ma poule.");
    console.log("Commande Salut effectué");
    }
});    
