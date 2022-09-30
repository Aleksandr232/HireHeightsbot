const { Telegraf, Markup, Composer, Scenes, session } = require("telegraf");
require("dotenv").config();
const commBot = require("./const");

const bot = new Telegraf('5788962599:AAEAxe_dTet2xn9f3FEHfsuJnfJqGnd-Kj0');



bot.start(async(ctx) =>{
 await ctx.reply(
    `Привествуем, ${
      ctx.message.from.first_name ? ctx.message.from.first_name : ""
    }, предлагаем в аренду рамные строительные леса, строительные вышки-туры, раздвижные лестницы. Дополнительно оказываем услуги на минитракторе МКСМ, а также услуги строительного альпинизма по очистке снега с крыш. Осуществляем доставку оборудования нашим автотранспортом по Казани и Республике Татарстан`
  );
try{
await ctx.reply('Услуги', Markup.keyboard([
  ['Вышки-туры', 'Минитрактор', 'Грузоперевозки'],
  ['Строительные леса'],
  ['Уборка снега с крыш']

  
]).oneTime().resize())
}catch(e){
  console.log(e)
}  
  });

bot.hears("Привет", (ctx) => ctx.reply("Привет, хорошего дня!"));



bot.help((ctx) => ctx.reply(commBot.commands));
bot.command("coder", async (ctx) => {
  try {
    await ctx.replyWithContact("+79991625236", "Саша");
  } catch (e) {
    console.error(e);
  }
});

bot.command("prompt", async (ctx) => {
  try {
    await ctx.replyWithHTML('<b>Напишите: Сайт, Контакты, Строительные леса, Уборка снега с крыш, Вышки-туры, Лестницы раздвижные, Грузоперевозки, Минитрактор</b>')
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
    await ctx.replyWithPhoto("https://арендавысоты.рф/frontend/img/gallery/adelya-kutuya.jpg")
    await ctx.replyWithHTML('<b>Предназначены для отделки стен и потолков внутри зданий, а также для отделочных и ремонтных работ на фасадах зданий. Имеют простую конструкцию на флажковых замках и при сборке не требуют специальных инструментов. Считаются легкими и надежными так как используется труба диаметром 42мм, а двойное ограждение гарантирует безопасность при строительных работах</b>')
    await ctx.replyWithDocument({source: 'files/Леса.xlsx'})
   } catch (e) {
     console.error(e);
   }
});

bot.hears("Вышки-туры", async (ctx) =>{  
  try {
    ctx.replyWithPhoto("https://арендавысоты.рф/frontend/img/tour-towers/balton-1.jpg")
    await ctx.replyWithHTML('<b>Предлагаем в аренду передвижные строительные вышки-туры «Балатон» высотой от 2-х до 21,3 метра. Вышка-тура «Балатон» считается лидером среди конкурентов. Отличается устойчивостью и безопасностью. Производится из лучших марок стали. Подходит для наружных и внутренних строительных работ</b>')
    await ctx.replyWithDocument({source: 'files/Вышки-туры.xlsx'})
   } catch (e) {
     console.error(e);
   }
});

bot.hears("Уборка снега с крыш", async (ctx) =>{  
  try {
    await ctx.replyWithPhoto('https://арендавысоты.рф/frontend/img/snow-removal/header-bg.jpg')
    await ctx.replyWithHTML('<b>Предлагаем уборку снега и удаление сосулек и наледи с крыш, профессиональными промышленными альпинистами, с гарантией сохранности вашей кровли и водостоков. У нас вы можете заказать разовую услугу или заключить договор на абонентское обслуживание на определенный период времени</b>'), 
    await ctx.replyWithHTML('<b>Уборка снега с плоской крыши от 40₽ до 100₽/ м2</b>'),
    await ctx.replyWithHTML('<b>Уборка снега со скатной крыши от 50₽ до 130₽ / м2</b>'),
    await ctx.replyWithHTML('<b>Удаление сосулек с крыш от 70₽ до 130₽ / м2</b>'),
    await ctx.replyWithHTML('<b>Уборка снега минитрактором 1200₽ / в час</b>')
   } catch (e) {
     console.error(e);
   }
});

bot.hears("Лестницы раздвижные", async (ctx) =>{  
  try {
    await ctx.replyWithPhoto('https://арендавысоты.рф/frontend/img/main/retractable-ladders.jpg')
    await ctx.replyWithHTML('<b>Предоставляем в аренду лестницы 3х-секционные раздвижные. Максимальная высота 9 и 12 м., в сложенном состоянии 4 и 4,5 м.</b>'), 
    await ctx.replyWithHTML('<b>неделя - 1500 ₽, месяц - 4500 ₽</b>'),
    await ctx.replyWithHTML('<b>Минимальная сумма аренды - 1500 ₽</b>')
   } catch (e) {
     console.error(e);
   }
});

bot.hears("Грузоперевозки", async (ctx) =>{  
  try {
    await ctx.replyWithPhoto('https://арендавысоты.рф/frontend/img/main/transport.jpg')
    await ctx.replyWithHTML('<b>Доставим ваш груз массой до 5 тонн в любую точку РТ и ближайшие регионы</b>'), 
    await ctx.replyWithHTML('<b>Цена по Казани и окрестностям 1100 ₽ / час. Минимальный заказ 3 часа</b>'),
    await ctx.replyWithHTML('<b>Цена на междугородние перевозки 30-35 ₽ / км в оба пути, в зависимости от груза, по договорённости</b>')
    await ctx.replyWithHTML('<b>Безналичный расчет +10% к стоимости</b>')
   } catch (e) {
     console.error(e);
   }
});

bot.hears("Минитрактор", async (ctx) =>{  
  try {
    await ctx.replyWithPhoto('https://арендавысоты.рф/frontend/img/main/tractor.jpg')
    await ctx.replyWithHTML('<b>Выполним весь спектр работ или сдадим в аренду с почасовой или посуточной оплатой. Доставим на объект собственным транспортом</b>'), 
    await ctx.replyWithHTML('<b>Цена: по факту работ 1300 ₽ / чac, минимум 4-х часовая оплата</b>'),
    await ctx.replyWithHTML('<b>Пpи работе от 8 часов 1200 ₽ / чаc</b>')
    await ctx.replyWithHTML('<b>Цена на аренду - договорная</b>')
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
