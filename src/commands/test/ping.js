const { SlashCommandBuilder} = require('discord.js');
const { execute } = require('../../events/client/ready');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('slash command leren maken'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage= 'dees werkt'
        await interaction.editReply({
            content: newMessage
        });
    }
}