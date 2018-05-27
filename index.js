const { stripIndents, oneLine } = require('common-tags');
const Discord = require("discord.js");
const bot = new Discord.Client();

let prefix = "?";
let owner = "LySoon - [17]#9277";

bot.on("ready", () => {
    bot.user.setGame("Oyna.TurkMCPE.Net") 
    console.log("Bağlandım!")   
});

bot.login("NDUwMjcyOTgwMDY1NDUyMDQ0.DexHcQ.iKa2EHTqKeJ9Gi7wF_ME8LiJPGw")

bot.on("message", message => {

    if (message.content.toLowerCase() === "sa") {
        message.reply("**Aleyküm Selam!**")
    }

    if (message.content === prefix + "gerektigindeacilacakkomut1") {
        const embed = new Discord.RichEmbed()

            .addField("Sunucu Adı", message.guild.name, true)

            .addField("Sunucu ID", message.guild.id, true)

            .addField("Sunucu Sahibi", message.guild.owner, true)

            .addField("Toplam Üye Sayısı", message.guild.memberCount, true)

            .addField("AFK Süresi", message.guild.afkTimeout, true)

            .setFooter("Oluşturulma Tarihi " + message.guild.createdAt)

            .setColor(0xff0000)

        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "yapimcibilgi") {
        const embed = new Discord.RichEmbed()

            .addField("Bot Sahibi", `<@${owner}>`, true)

            .addField("Version", "1.0.0", true)

            .addField("Toplam Sunucu Sayısı", bot.guilds.size, true)

            .addField("Toplam Kullanıcı Sayısı", bot.users.size, true)
            
            .addField("Toplam Kanal Sayısı", bot.channels.size, true)

            .addField("Kitaplık Türü", "discord.js")

            .setColor(0x000001)
        
        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "kurabiye") {
        message.channel.sendMessage(`Canım gel buraya sana kurabiye vereceğim! <@${message.author.id}>`)
        message.react("🍪")
    }

    if (message.content === prefix + "bilgi") {
        message.channel.sendMessage(stripIndents`
**Selam, Ben ${bot.user.username}!** Şuanda Görmekte Olduğunuz Kısım Benim Bütün Sunucu Özelliklerimi Ve Sosyal Medya Hesaplarımı Göstermektedir.

**Bilgilerim**
\`\`\`fix
Sunucu IP : Oyna.TurkMCPE.Net
Sunucu Sürüm : 1.4.0
Sunucu WebSite : TurkMCPE.Net
İnstagram : www.instagram.com/turkmcpenetwork
Youtube : www.youtube.com/turkmcpenetwork
Twitch : www.twitch.tv/turkmcpenetwork
Facebook Sayfası : www.facebook.com/turkmcpenetwork
Facebook Grubu : www.facebook.com/g/turkmcpenetwork
\`\`\``)
    }

});

bot.on("message", message => {

    const kufur = ["amk", "aq", "oc", "amq", "salak", "orospu", "piç", "sg", "siktir"];
    if (kufur.some(word => message.content.includes(word)) ) {
        message.reply("**Küfür Etme!** :rage:")
        message.delete()
    }

});

// LySoon | Yusuf Ali Güngör Tarafından TurkMCPE İçin Yazıldı.
