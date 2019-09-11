console.log("")
console.log("███████╗██╗   ██╗███████╗███████╗")
console.log("██╔════╝╚██╗ ██╔╝██╔════╝██╔════╝")
console.log("███████╗ ╚████╔╝ █████╗  █████╗  ")
console.log("╚════██║  ╚██╔╝  ██╔══╝  ██╔══╝  ")
console.log("███████║   ██║   ██║     ███████╗")
console.log("╚══════╝   ╚═╝   ╚═╝     ╚══════╝")
console.log(" ")
console.log(" ")

const Discord = require('discord.js'); // This is making sure that node has the package 'discord.js' installed
const client = new Discord.Client(); // This is telling it to start a new client under 'client'
const config = require("./config.json") // This is the config that we are loading

client.on('ready', () => { // This is emitted when the client is authenticated
	console.log(`Logged in as ` + client.user.tag) // To tell the user that we have logged in
	
	client.user.setActivity(config.message, { // This pulls the message and status type from the config, usually only bots can use this part of the Discord API, thats why this isn't allowed by discord
		// Uncomment the line below if you're using STREAMING as your status type
		url: config.streamingurl,
		type: config.statustype
	});
});
client.login(config.token); // Logs the client in