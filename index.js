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

bot.hears("Выбор", async (ctx) => {
  try {
    ctx.replyWithPhoto({ source: "./img/choice.jpg" });
  } catch (e) {
    console.error(e);
  }
});

bot.hears("Позиция", async (ctx) => {
  try {
    ctx.replyWithPhoto({ source: "./img/people.jpg" });
  } catch (e) {
    console.error(e);
  }
});

bot.hears("События", async (ctx) => {
  try {
    ctx.replyWithPhoto({ source: "./img/developments.jpg" });
  } catch (e) {
    console.error(e);
  }
});

bot.hears("Жертва", async (ctx) => {
  try {
    ctx.replyWithPhoto({ source: "./img/victim.jpg" });
  } catch (e) {
    console.error(e);
  }
});

bot.hears("Роль", async (ctx) => {
  try {
    ctx.replyWithPhoto({ source: "./img/role.jpg" });
  } catch (e) {
    console.error(e);
  }
});

bot.hears("Страхи", async (ctx) => {
  try {
    ctx.replyWithPhoto({ source: "./img/fears.jpg" });
  } catch (e) {
    console.error(e);
  }
});

bot.hears("Дыхание", async (ctx) => {
  try {
    ctx.replyWithPhoto({ source: "./img/breath.jpg" });
  } catch (e) {
    console.error(e);
  }
});

bot.hears("Cтоп", async (ctx) => {
  try {
    ctx.replyWithPhoto({ source: "./img/stop.jpg" });
  } catch (e) {
    console.error(e);
  }
});

bot.hears("Быть", async (ctx) => {
  try {
    ctx.replyWithPhoto({ source: "./img/tobe.jpg" });
  } catch (e) {
    console.error(e);
  }
});

bot.hears("Управляю", async (ctx) => {
  try {
    ctx.replyWithPhoto({ source: "./img/manage.jpg" });
  } catch (e) {
    console.error(e);
  }
});

bot.hears("Цель", async (ctx) => {
  try {
    ctx.replyWithPhoto({ source: "./img/goal.jpg" });
  } catch (e) {
    console.error(e);
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

bot.command("menu", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      "<b>Меню</b>",
      Markup.inlineKeyboard([
        [
          Markup.button.callback("Выбор", "btn_1"),
          Markup.button.callback("Позиция", "btn_2"),
          Markup.button.callback("События", "btn_3"),
          Markup.button.callback("Жертва", "btn_4"),
        ],
        [
          Markup.button.callback("Управляю", "btn_5"),
          Markup.button.callback("Быть", "btn_6"),
          Markup.button.callback("Cтоп", "btn_7"),
          Markup.button.callback("Дыхание", "btn_8"),
          Markup.button.callback("Роль", "btn_9"),
          Markup.button.callback("Страхи", "btn_10"),
        ],
        [Markup.button.callback("Цель", "btn_11")],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

bot.action("btn_1", async (ctx) => {
  try {
    ctx.replyWithPhoto({ source: "./img/choice.jpg" });
  } catch (e) {
    console.error(e);
  }
});

bot.action("btn_2", (ctx) => {
  try {
    ctx.replyWithPhoto({ source: "./img/people.jpg" });
  } catch (e) {
    console.error(e);
  }
});

bot.action("btn_3", async (ctx) => {
  try {
    ctx.replyWithPhoto({ source: "./img/developments.jpg" });
  } catch (e) {
    console.error(e);
  }
});

bot.action("btn_4", async (ctx) => {
  try {
    ctx.replyWithPhoto({ source: "./img/victim.jpg" });
  } catch (e) {
    console.error(e);
  }
});

bot.action("btn_5", async (ctx) => {
  try {
    ctx.replyWithPhoto({ source: "./img/manage.jpg" });
  } catch (e) {
    console.error(e);
  }
});

bot.action("btn_6", async (ctx) => {
  try {
    ctx.replyWithPhoto({ source: "./img/tobe.jpg" });
  } catch (e) {
    console.error(e);
  }
});

bot.action("btn_7", async (ctx) => {
  try {
    ctx.replyWithPhoto({ source: "./img/stop.jpg" });
  } catch (e) {
    console.error(e);
  }
});

bot.action("btn_8", async (ctx) => {
  try {
    ctx.replyWithPhoto({ source: "./img/breath.jpg" });
  } catch (e) {
    console.error(e);
  }
});

bot.action("btn_9", async (ctx) => {
  try {
    ctx.replyWithPhoto({ source: "./img/role.jpg" });
  } catch (e) {
    console.error(e);
  }
});

bot.action("btn_10", async (ctx) => {
  try {
    ctx.replyWithPhoto({ source: "./img/fears.jpg" });
  } catch (e) {
    console.error(e);
  }
});

bot.action("btn_11", async (ctx) => {
  try {
    ctx.replyWithPhoto({ source: "./img/goal.jpg" });
  } catch (e) {
    console.error(e);
  }
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
