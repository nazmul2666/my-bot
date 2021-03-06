require('dotenv').config()
const Discord = require('discord.js')
const fs = require('fs')
const client = new Discord.Client()

fs.readdir('./events/', (err, files) => {
    files.forEach(file => {
        const eventHandler = require(`./events/${file}`)
        const eventName = file.split('.')[0]
        client.on(eventName, arg => eventHandler(client, arg))
    })
})


client.login(process.env.BOT_TOKEN)