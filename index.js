const { Telegraf, Markup, Composer } = require("telegraf");
require("dotenv").config();
const commBot = require("./const");

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) =>
  ctx.reply(
    `Привествуем, ${
      ctx.message.from.first_name ? ctx.message.from.first_name : ""
    }, предлагаем в аренду рамные строительные леса, строительные вышки-туры, раздвижные лестницы. Дополнительно оказываем услуги на минитракторе МКСМ, а также услуги строительного альпинизма по очистке снега с крыш. Осуществляем доставку оборудования нашим автотранспортом по Казани и Республике Татарстан`
  )
);
bot.hears("Привет", (ctx) => ctx.reply("Привет, хорошего дня!"));



bot.help((ctx) => ctx.reply(commBot.commands));
bot.command("coder", async (ctx) => {
  try {
    await ctx.replyWithContact("+79991625236", "Саша");
  } catch (e) {
    console.error(e);
  }
});

bot.command("site", (ctx) => {
  ctx.replyWithHTML('<a href="https://xn--80aagge2ckkol0hd.xn--p1ai/">Наш сайт</a>');
});

bot.hears("Сайт", (ctx)=>{
  ctx.replyWithHTML('<a href="https://xn--80aagge2ckkol0hd.xn--p1ai/">Наш сайт</a>');
})

bot.hears("Контакты", async (ctx) =>{  
  try {
    await ctx.replyWithContact('+79600625525', 'Аренда Высоты')
    await ctx.replyWithHTML('<a href="https://yandex.ru/maps/43/kazan/house/ulitsa_mirkhaydara_fayzi_68/YEAYdAJpQUUGQFtvfXtycHhlYQ==/?ll=49.259802%2C55.731465&z=16">Карта</a>')
   } catch (e) {
     console.error(e);
   }
});

bot.hears("Строительные леса", async (ctx) =>{  
  try {
    await ctx.replyWithHTML('<b>Предназначены для отделки стен и потолков внутри зданий, а также для отделочных и ремонтных работ на фасадах зданий. Имеют простую конструкцию на флажковых замках и при сборке не требуют специальных инструментов. Считаются легкими и надежными так как используется труба диаметром 42мм, а двойное ограждение гарантирует безопасность при строительных работах</b>')
    await ctx.replyWithDocument({source: 'files/Леса.xlsx'})
   } catch (e) {
     console.error(e);
   }
});

bot.hears("Вышки-туры", async (ctx) =>{  
  try {
    await ctx.replyWithHTML('<b>Предлагаем в аренду передвижные строительные вышки-туры «Балатон» высотой от 2-х до 21,3 метра. Вышка-тура «Балатон» считается лидером среди конкурентов. Отличается устойчивостью и безопасностью. Производится из лучших марок стали. Подходит для наружных и внутренних строительных работ</b>')
    await ctx.replyWithDocument({source: 'files/Вышки-туры.xlsx'})
   } catch (e) {
     console.error(e);
   }
});

bot.command("menu", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      "<b>Меню</b>",
      Markup.inlineKeyboard([
        [
          Markup.button.callback("", "btn_1"),
          Markup.button.callback("", "btn_2"),
          Markup.button.callback("", "btn_3"),
          Markup.button.callback("", "btn_4"),
        ]
      ])
    );
  } catch (e) {
    console.error(e);
  }
});



bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
