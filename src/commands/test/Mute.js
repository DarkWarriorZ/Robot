const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName("mute")
        .setDescription("Gebruik: /Mute [naam] [reden]")

        .addUserOption(option => option.setName('persoon')
        .setDescription('de persoon die je wilt muten')
        .setRequired(true))

        .addIntegerOption((option) => option.setName('duur')
        .setDescription("de duur van de mute (minuten)")
        .setRequired(true)
        )

        .addStringOption(option => option.setName('reden')
        .setDescription("de reden waarom je deze persoon wilt muten")),

    async execute(interaction, client) {
        const user = interaction.option.getUser('persoon');
        let reason = interaction.option.getString('reden');
        const time = interaction.option.getInterger("duur")
        const member = await interaction.guild.members.fetch(user.id).catch(console.error);

        if (!reason) reason = "geen reden gegeven"


        
        await member.timeout(time *60 *1000, reden).catch(console.error);
        await interaction.reply({ content: `${user.tag} is gemute!`})
        },

        
        
    };