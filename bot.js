const Telegraf = require('telegraf')
const bot = new Telegraf('')

bot.start((ctx) => {
   ctx.reply("Hello " + ctx.from.first_name + ' ' + ctx.from.last_name)
})

bot.help((ctx) => {
    ctx.reply("Help command")
})

bot.settings((ctx) => {
    ctx.reply("Help command")
})

bot.command(["hello", "Hello", "Hi", "hi"], (ctx) => {
    ctx.reply("Hello World")
})

bot.hears(["cat", "horse", "duck"], (ctx) => {
    ctx.reply("animal")
})

bot.on("sticker" , (ctx) => {
    ctx.reply("Стикеры для дурачков " + ctx.from.first_name + " " + ctx.from.last_name)
})

bot.on("photo" , (ctx) => {
    ctx.reply("это круто")
})

bot.hears("Seen", (ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, "Done",
    {
        parse_mode: 'Markdown',
        disable_notification: false
    })
})

bot.use((ctx) => {
    ctx.reply("Что?")
})

bot.launch()
