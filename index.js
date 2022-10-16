const { Telegraf, Markup, Composer, Scenes, session } = require("telegraf");
const express = require('express');
require("dotenv").config();
const commBot = require("./const");

const bot = new Telegraf("5788962599:AAEAxe_dTet2xn9f3FEHfsuJnfJqGnd-Kj0");
const webAppUrl='https://arenda.vercel.app/'
const app = express();

app.use(express.json());

bot.start( async (ctx) => {
  await ctx.reply(
    `Привествуем, ${
      ctx.message.from.first_name ? ctx.message.from.first_name : ""
    }, предлагаем в аренду рамные строительные леса, строительные вышки-туры, раздвижные лестницы. Дополнительно оказываем услуги на минитракторе МКСМ, а также услуги строительного альпинизма по очистке снега с крыш. Осуществляем доставку оборудования нашим автотранспортом по Казани и Республике Татарстан`
  );
try{
await ctx.reply('Используй в чате символ / и откроются доп.возможности', Markup.keyboard([
  ['Вышки-туры', 'Минитрактор'],
  ['Строительные леса'],
  ['Уборка снега с крыш'],
  ['Грузоперевозки'],
  [Markup.button.webApp('Отправить заявку', webAppUrl )]

  
]).oneTime().resize())
}catch(e){
  console.log(e)
}  
  
});

bot.on('message', async(ctx)=>{
  const chatId = ctx.chat_id;

if(ctx.reply(ctx.webAppData.data)){
try {
    const data = JSON.parse(ctx.webAppData.data)
    console.log(data)
    await bot.sendMessage(chatId, 'Спасибо за обратную связь!')
    await bot.sendMessage(chatId, 'Ваше имя:' + data?.name);
    await bot.sendMessage(chatId, 'Ваша фамилия:' + data?.surname);

    setTimeout(async () => {
        await bot.sendMessage(chatId, 'Всю информацию вы получите в этом чате');
    }, 3000)
} catch (e) {
    console.log(e);
}

}})


bot.hears("Добрый день", (ctx)=>ctx.reply(`Добрый день, ${ctx.message.from.first_name ? ctx.message.from.first_name : ""}`))
bot.hears("Добрый вечер", (ctx)=>ctx.reply(`И вам добрый вечер, ${ctx.message.from.first_name ? ctx.message.from.first_name : ""} самое время посмотреть наши услуги`))
bot.hears("Привет", (ctx) => ctx.reply("Привет, хорошего дня!"));
bot.hears("Благодарю", async (ctx) => {
  try {
    await ctx.reply("🙏");
  } catch (e) {
    console.log(e);
  }
});

bot.hears("Благодарю, тебя", async (ctx) => {
  try {
    await ctx.reply("🙏");
  } catch (e) {
    console.log(e);
  }
});
bot.hears("благодарю", async (ctx) => {
  try {
    await ctx.reply("🙏");
  } catch (e) {
    console.log(e);
  }
});
bot.hears("Спасибо", async (ctx) => {
  try {
    await ctx.reply("👐");
  } catch (e) {
    console.log(e);
  }
});
bot.hears("спасибо", async (ctx) => {
  try {
    await ctx.reply("🤝");
  } catch (e) {
    console.log(e);
  }
});

bot.hears("привет", async (ctx) => {
  try {
    await ctx.reply("👋");
  } catch (e) {
    console.log(e);
  }
});

bot.hears("👋", async (ctx) => {
  try {
    await ctx.reply("Привет");
  } catch (e) {
    console.log(e);
  }
});

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
    await ctx.replyWithHTML(
      "<b>Напишите: Сайт, Контакты, Строительные леса, Уборка снега с крыш, Вышки-туры, Лестницы раздвижные, Грузоперевозки, Минитрактор, Услуги, Фото, Отправить заявку</b>"
    );
  } catch (e) {
    console.error(e);
  }
});

bot.hears("Сайт", (ctx) => {
  ctx.replyWithHTML(
    '<a href="https://xn--80aagge2ckkol0hd.xn--p1ai/">Наш сайт</a>'
  );
});

bot.hears("Контакты", async (ctx) => {
  try {
    await ctx.replyWithContact("+79600625525", "Аренда Высоты");
    await ctx.replyWithHTML(
      '<a href="https://yandex.ru/maps/43/kazan/house/ulitsa_mirkhaydara_fayzi_68/YEAYdAJpQUUGQFtvfXtycHhlYQ==/?ll=49.259802%2C55.731465&z=16">Карта</a>'
    );
  } catch (e) {
    console.error(e);
  }
});

bot.hears("Строительные леса", async (ctx) => {
  try {
    await ctx.replyWithPhoto(
      "https://арендавысоты.рф/frontend/img/gallery/adelya-kutuya.jpg"
    );
    await ctx.replyWithHTML(
      "<b>Предназначены для отделки стен и потолков внутри зданий, а также для отделочных и ремонтных работ на фасадах зданий. Имеют простую конструкцию на флажковых замках и при сборке не требуют специальных инструментов. Считаются легкими и надежными так как используется труба диаметром 42мм, а двойное ограждение гарантирует безопасность при строительных работах</b>"
    );
    await ctx.replyWithDocument({ source: "files/Леса.xlsx" });
  } catch (e) {
    console.error(e);
  }
});

bot.hears("Услуги", async (ctx) => {
  await ctx.reply(
    "Услуги",
    Markup.keyboard([
      ["Вышки-туры", "Минитрактор"],
      ["Строительные леса"],
      ["Уборка снега с крыш"],
      [Markup.button.webApp('Отправить заявку', webAppUrl )]
    ])
      .oneTime()
      .resize(),
  );
});

bot.hears("Отправить заявку", async (ctx) => {
  await ctx.reply(
    'Заявка',
    Markup.keyboard([
    Markup.button.webApp('Отправить заявку', webAppUrl )
   ])
   .oneTime()
   .resize()

 )});

bot.hears("Вышки-туры", async (ctx) => {
  try {
    ctx.replyWithPhoto(
      "https://арендавысоты.рф/frontend/img/tour-towers/balton-1.jpg"
    );
    await ctx.replyWithHTML(
      "<b>Предлагаем в аренду передвижные строительные вышки-туры «Балатон» высотой от 2-х до 21,3 метра. Вышка-тура «Балатон» считается лидером среди конкурентов. Отличается устойчивостью и безопасностью. Производится из лучших марок стали. Подходит для наружных и внутренних строительных работ</b>"
    );
    await ctx.replyWithDocument({ source: "files/Вышки-туры.xlsx" });
  } catch (e) {
    console.error(e);
  }
});

bot.hears("Уборка снега с крыш", async (ctx) => {
  try {
    await ctx.replyWithPhoto(
      "https://арендавысоты.рф/frontend/img/snow-removal/header-bg.jpg"
    );
    await ctx.replyWithHTML(
      "<b>Предлагаем уборку снега и удаление сосулек и наледи с крыш, профессиональными промышленными альпинистами, с гарантией сохранности вашей кровли и водостоков. У нас вы можете заказать разовую услугу или заключить договор на абонентское обслуживание на определенный период времени</b>"
    ),
      await ctx.replyWithHTML(
        "<b>Уборка снега с плоской крыши от 40₽ до 100₽/ м2</b>"
      ),
      await ctx.replyWithHTML(
        "<b>Уборка снега со скатной крыши от 50₽ до 130₽ / м2</b>"
      ),
      await ctx.replyWithHTML(
        "<b>Удаление сосулек с крыш от 70₽ до 130₽ / м2</b>"
      ),
      await ctx.replyWithHTML(
        "<b>Уборка снега минитрактором 1200₽ / в час</b>"
      );
  } catch (e) {
    console.error(e);
  }
});

bot.hears("Лестницы раздвижные", async (ctx) => {
  try {
    await ctx.replyWithPhoto(
      "https://арендавысоты.рф/frontend/img/main/retractable-ladders.jpg"
    );
    await ctx.replyWithHTML(
      "<b>Предоставляем в аренду лестницы 3х-секционные раздвижные. Максимальная высота 9 и 12 м., в сложенном состоянии 4 и 4,5 м.</b>"
    ),
      await ctx.replyWithHTML("<b>неделя - 1500 ₽, месяц - 4500 ₽</b>"),
      await ctx.replyWithHTML("<b>Минимальная сумма аренды - 1500 ₽</b>");
  } catch (e) {
    console.error(e);
  }
});

bot.hears("Грузоперевозки", async (ctx) => {
  try {
    await ctx.replyWithPhoto(
      "https://арендавысоты.рф/frontend/img/main/transport.jpg"
    );
    await ctx.replyWithHTML(
      "<b>Доставим ваш груз массой до 5 тонн в любую точку РТ и ближайшие регионы</b>"
    ),
      await ctx.replyWithHTML(
        "<b>Цена по Казани и окрестностям 1100 ₽ / час. Минимальный заказ 3 часа</b>"
      ),
      await ctx.replyWithHTML(
        "<b>Цена на междугородние перевозки 30-35 ₽ / км в оба пути, в зависимости от груза, по договорённости</b>"
      );
    await ctx.replyWithHTML("<b>Безналичный расчет +10% к стоимости</b>");
  } catch (e) {
    console.error(e);
  }
});

bot.hears("Минитрактор", async (ctx) => {
  try {
    await ctx.replyWithPhoto(
      "https://арендавысоты.рф/frontend/img/main/tractor.jpg"
    );
    await ctx.replyWithHTML(
      "<b>Выполним весь спектр работ или сдадим в аренду с почасовой или посуточной оплатой. Доставим на объект собственным транспортом</b>"
    ),
      await ctx.replyWithHTML(
        "<b>Цена: по факту работ 1300 ₽ / чac, минимум 4-х часовая оплата</b>"
      ),
      await ctx.replyWithHTML("<b>Пpи работе от 8 часов 1200 ₽ / чаc</b>");
    await ctx.replyWithHTML("<b>Цена на аренду - договорная</b>");
  } catch (e) {
    console.error(e);
  }
});

bot.command("info", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      "<b>Информация</b>",
      Markup.inlineKeyboard([
        [
          Markup.button.callback("Фото", "btn_1"),
          Markup.button.callback("Контакты", "btn_2"),
          Markup.button.callback("Instagram", "btn_3"),
          Markup.button.webApp("Сайт", "https://xn--80aagge2ckkol0hd.xn--p1ai/%D0%B2%D1%8B%D1%88%D0%BA%D0%B8-%D1%82%D1%83%D1%80%D1%8B"),
        ],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

bot.action("btn_1", async (ctx) => {
  try {
    await ctx.reply(
      "Вот так они выгядят",
      Markup.keyboard([["Вышки-туры фото", "Строительные леса фото"]])
        .oneTime()
        .resize()
    );
  } catch (e) {
    console.log(e);
  }
});

bot.hears("Фото", async (ctx) => {
  try {
    await ctx.reply(
      "Вот так они выгядят",
      Markup.keyboard([["Вышки-туры фото", "Строительные леса фото"]])
        .oneTime()
        .resize()
    );
  } catch (e) {
    console.log(e);
  }
});

bot.hears("Строительные леса фото", async (ctx) => {
  try {
    await ctx.replyWithPhoto(
      "https://арендавысоты.рф/frontend/img/gallery/baumana.jpg"
    );
    await ctx.replyWithPhoto(
      "https://арендавысоты.рф/frontend/img/gallery/malyye-mabany.jpg"
    );
    await ctx.replyWithPhoto(
      "https://арендавысоты.рф/frontend/img/gallery/adelya-kutuya.jpg"
    );
    await ctx.replyWithPhoto(
      "https://арендавысоты.рф/frontend/img/gallery/school-gabishevo.jpg"
    );
    await ctx.replyWithPhoto(
      "https://арендавысоты.рф/frontend/img/gallery/vysokaya-gora.jpg"
    );
    await ctx.replyWithPhoto(
      "https://арендавысоты.рф/frontend/img/gallery/novoye-shigaleyevo.jpg"
    );
    await ctx.replyWithPhoto(
      "https://арендавысоты.рф/frontend/img/gallery/rodiny.jpg"
    );
    await ctx.replyWithPhoto(
      "https://арендавысоты.рф/frontend/img/gallery/gabishevo.jpg"
    );
    await ctx.replyWithPhoto(
      "https://арендавысоты.рф/frontend/img/gallery/kazanskiy-kreml.jpg"
    );
    await ctx.replyWithPhoto(
      "https://арендавысоты.рф/frontend/img/gallery/peschanyye-kovali.jpg"
    );
  } catch (e) {
    console.log(e);
  }
});

bot.hears("Вышки-туры фото", async (ctx) => {
  try {
    await ctx.replyWithPhoto(
      "https://арендавысоты.рф/frontend/img/gallery/kazan-moll.jpg"
    );
    await ctx.replyWithPhoto(
      "https://арендавысоты.рф/frontend/img/gallery/laishevo.jpg"
    );
    await ctx.replyWithPhoto(
      "https://арендавысоты.рф/frontend/img/gallery/salmachi.jpg"
    );
    await ctx.replyWithPhoto(
      "https://арендавысоты.рф/frontend/img/gallery/kuzemetevskoe.jpg"
    );
    await ctx.replyWithPhoto(
      "https://арендавысоты.рф/frontend/img/gallery/usady.jpg"
    );
    await ctx.replyWithPhoto(
      "https://арендавысоты.рф/frontend/img/gallery/kabany.jpg"
    )
    await ctx.replyWithPhoto(
      "https://арендавысоты.рф/frontend/img/gallery/our-storage-salmachi.jpg"
    )
  } catch (e) {
    console.log(e);
  }
});

bot.action("btn_2", async (ctx) => {
  try {
    await ctx.replyWithContact("+79600625525", "Аренда Высоты");
    await ctx.replyWithHTML(
      '<a href="https://yandex.ru/maps/43/kazan/house/ulitsa_mirkhaydara_fayzi_68/YEAYdAJpQUUGQFtvfXtycHhlYQ==/?ll=49.259802%2C55.731465&z=16">Карта</a>'
    );
  } catch (e) {
    console.log(e);
  }
});

bot.action("btn_3", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      '<a href="https://instagram.com/arenda_visoti?igshid=YmMyMTA2M2Y=">Подписывайся</a>'
    );
  } catch (e) {
    console.log(e);
  }
});

bot.action("btn_4", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      '<a href="https://xn--80aagge2ckkol0hd.xn--p1ai/">Наш сайт</a>'
    );
  } catch (e) {
    console.log(e);
  }
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
