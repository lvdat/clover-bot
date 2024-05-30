const synchronizeSlashCommands = require('../modules/sync_commands.js')
const { ActivityType } = require('discord.js')
const fs = require('fs')
const path = require('path')
module.exports = {
    name: 'ready',
    async execute(client) {
        console.log(`Connected as ${client.user.username}`)
        client.user.setActivity(`${client.guilds.cache.size} servers`, { type: ActivityType.Watching })
        client.user.setStatus('online')

        // This is when the Slash Commands synchronisation starts
        await synchronizeSlashCommands(client,
        client.commands.map((c) => c.data),
        {
            // The parameters to be modified for synchronisation
            debug: true,
            // If you set a server ID, then it will ONLY be for the targeted server.
            // If you don't put guildID, it will be in GLOBAL,
            // So on all servers.
            // guildId: "YourDiscordServerOrDeleteThisLine"
        }
        )
    }
}