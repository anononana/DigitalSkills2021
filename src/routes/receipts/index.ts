import Router from "koa-router";
import { Op, Sequelize } from "sequelize";
import Cashier from "../../db/models/Cashiers/Cashier.model";
import Receipt from "../../db/models/Receipt/Receipt.model";
import User from "../../db/models/User/User.model";
import sequelize from "../../db/sequelize";
import { checkLogin } from "../../middlewares/auth";
import accessR from "../../middlewares/auth/accessR";
var timeseries = require("timeseries-analysis");

// import auth from './auth';
// import user from './user'

const router = new Router();

router.prefix("/receipt");

router.post("/", checkLogin, async (ctx: any) => {
  const user = await User.findOne({
    where: {
      id: ctx.user,
    },
  });
  const receipts = await Receipt.findAll({
    where: {
      userId: ctx.user,
    },
    order: [["printDate", "DESC"]],
  });
  ctx.body = { receipts: receipts, userLimit: user!.limit };
});

router.post("/cashierList", checkLogin, async (ctx: any) => {
  const cashier = await Cashier.findOne({
    where: {
      userId: ctx.user
    }
  })
  if(!cashier) {
    ctx.throw(400, 'Пользователь не является кассиром')
  }
  const receipts = await Receipt.findAll({
    where: {
      cashierId: cashier?.id,
    },
    order: [["printDate", "DESC"]],
  });
  ctx.body = { receipts: receipts };
});

router.post("/filter", checkLogin, async (ctx: any) => {
  const body = ctx.request.body;
  const user = await User.findOne({
    where: {
      id: ctx.user,
    },
  });
  const receipts = await Receipt.findAll({
    where: {
      userId: ctx.user,
      printDate: {
        [Op.between]: [body.start, body.end],
      },
    },
  });
  ctx.body = { receipts };
});

router.post("/analyze", checkLogin, async (ctx: any) => {
  const analyzedDate = new Date();
  analyzedDate.setMonth(analyzedDate.getMonth() - 1);
  const user = await User.findOne({
    where: {
      id: ctx.user,
    },
  });
  const receipts = await Receipt.findAll({
    where: {
      userId: ctx.user,
      printDate: {
        [Op.between]: [analyzedDate, new Date()],
      },
    },
  });
  let sum = 0;
  receipts.forEach((element) => {
    sum += element.sum;
  });
  ctx.body = { spentMoney: sum, leftover: user!.limit - sum };
});

router.post("/create", checkLogin, async (ctx: any) => {
  const body = ctx.request.body;
  var receiptBody = {
    sum: body.sum,
    userId: ctx.user,
    printDate: body.date,
    cashierId: null
  }
  if(body.cashierId) {
    receiptBody.cashierId = body.cashierId
  }
  const receipt = await Receipt.create(receiptBody);
  ctx.body = { success: true, body: receipt };
});

router.post("/generalStat", accessR, async (ctx: any) => {
  var now;
  const body = ctx.request.body;
  if (!body.targetMonth) {
    now = new Date();
  } else {
    now = new Date(body.targetYear, body.targetMonth, 0);
  }
  const receipts = await Receipt.findAll({
    where: {
      printDate: {
        [Op.between]: [
          new Date(now.getFullYear(), now.getMonth(), 1, now.getHours() + 3),
          new Date(
            now.getFullYear(),
            now.getMonth() + 1,
            0,
            now.getHours() + 3
          ),
        ],
      },
    },
    order: [["printDate", "DESC"]],
  });
  const total = await Receipt.sum("sum", {
    where: {
      printDate: {
        [Op.between]: [
          new Date(now.getFullYear(), now.getMonth(), 1, now.getHours() + 3),
          new Date(
            now.getFullYear(),
            now.getMonth() + 1,
            0,
            now.getHours() + 3
          ),
        ],
      },
    },
  });

  ctx.body = { receipts: receipts, total: total };
});

router.post("/averageMonthSum", accessR, async (ctx: any) => {
  var now;
  const body = ctx.request.body;
  if (!body.targetMonth) {
    now = new Date();
  } else {
    now = new Date(body.targetYear, body.targetMonth, 0);
  }
  const receipts = await Receipt.findAll({
    where: {
      printDate: {
        [Op.between]: [
          new Date(now.getFullYear(), now.getMonth(), 1, now.getHours() + 3),
          new Date(
            now.getFullYear(),
            now.getMonth() + 1,
            0,
            now.getHours() + 3
          ),
        ],
      },
    },
    order: [["printDate", "DESC"]],
  });
  const total = await Receipt.sum("sum", {
    where: {
      printDate: {
        [Op.between]: [
          new Date(now.getFullYear(), now.getMonth(), 1, now.getHours() + 3),
          new Date(
            now.getFullYear(),
            now.getMonth() + 1,
            0,
            now.getHours() + 3
          ),
        ],
      },
    },
  });
  const receiptslast = await Receipt.findAll({
    where: {
      printDate: {
        [Op.between]: [
          new Date(
            now.getFullYear(),
            now.getMonth() - 1,
            1,
            now.getHours() + 3
          ),
          new Date(now.getFullYear(), now.getMonth(), 0, now.getHours() + 3),
        ],
      },
    },
    order: [["printDate", "DESC"]],
  });
  const totallast = await Receipt.sum("sum", {
    where: {
      printDate: {
        [Op.between]: [
          new Date(
            now.getFullYear(),
            now.getMonth() - 1,
            1,
            now.getHours() + 3
          ),
          new Date(now.getFullYear(), now.getMonth(), 0, now.getHours() + 3),
        ],
      },
    },
  });
  ctx.body = {
    currentMonthAvg: total / receipts.length,
    lastMonthAvg: totallast / receiptslast.length,
  };
});

router.post("/averageDaySum", accessR, async (ctx: any) => {
  var now;
  const body = ctx.request.body;
  if (!body.targetMonth) {
    now = new Date();
  } else {
    now = new Date(body.targetYear, body.targetMonth, 0);
  }
  const receipts = await Receipt.findAll({
    where: {
      printDate: {
        [Op.between]: [
          new Date(now.getFullYear(), now.getMonth(), 1, now.getHours() + 3),
          new Date(
            now.getFullYear(),
            now.getMonth() + 1,
            0,
            now.getHours() + 3
          ),
        ],
      },
    },
    order: [["printDate", "DESC"]],
  });
  const total = await Receipt.sum("sum", {
    where: {
      printDate: {
        [Op.between]: [
          new Date(now.getFullYear(), now.getMonth(), 1, now.getHours() + 3),
          new Date(
            now.getFullYear(),
            now.getMonth() + 1,
            0,
            now.getHours() + 3
          ),
        ],
      },
    },
  });
  const receiptslast = await Receipt.findAll({
    where: {
      printDate: {
        [Op.between]: [
          new Date(
            now.getFullYear(),
            now.getMonth() - 1,
            1,
            now.getHours() + 3
          ),
          new Date(now.getFullYear(), now.getMonth(), 0, now.getHours() + 3),
        ],
      },
    },
    order: [["printDate", "DESC"]],
  });
  const totallast = await Receipt.sum("sum", {
    where: {
      printDate: {
        [Op.between]: [
          new Date(
            now.getFullYear(),
            now.getMonth() - 1,
            1,
            now.getHours() + 3
          ),
          new Date(now.getFullYear(), now.getMonth(), 0, now.getHours() + 3),
        ],
      },
    },
  });
  if (new Date().getMonth() == now.getMonth()) {
    return (ctx.body = {
      currentMonthAvg: total / new Date().getDate(),
      lastMonthAvg:
        totallast / new Date(now.getFullYear(), now.getMonth(), 0).getDate(),
    });
  }
  ctx.body = {
    currentMonthAvg:
      total / new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate(),
    lastMonthAvg:
      totallast / new Date(now.getFullYear(), now.getMonth(), 0).getDate(),
  };
});

router.post("/userList", accessR, async (ctx: any) => {
  var greedyUsers: Object[] = [];
  var m: User[] = [];
  var now: Date;
  const body = ctx.request.body;
  if (!body.targetMonth) {
    now = new Date();
  } else {
    now = new Date(body.targetYear, body.targetMonth, 0);
  }
  const users = await User.findAll();
  for (var user of users) {
    const totaluser = await Receipt.sum("sum", {
      where: {
        printDate: {
          [Op.between]: [
            new Date(now.getFullYear(), now.getMonth(), 1, now.getHours() + 3),
            new Date(
              now.getFullYear(),
              now.getMonth() + 1,
              0,
              now.getHours() + 3
            ),
          ],
        },
        userId: user.id,
      },
    });
    if (user.limit < totaluser) {
      greedyUsers.push({ user, overlimit: totaluser - user.limit });
    }
  }
  ctx.body = greedyUsers;
});

router.post("/forecast", accessR, async (ctx: any) => {
  var data: Object[] = [];
  var now: Date;
  var sums: Object[] = [];
  const body = ctx.request.body;
  if (!body.targetMonth) {
    now = new Date();
  } else {
    now = new Date(body.targetYear, body.targetMonth, 0);
  }
  for (var i = 11; i >= 1; i--) {
    const totaluser = await Receipt.sum("sum", {
      where: {
        printDate: {
          [Op.between]: [
            new Date(
              now.getFullYear(),
              now.getMonth() - i,
              1,
              now.getHours() + 3
            ),
            new Date(
              now.getFullYear(),
              now.getMonth() - (i - 1),
              0,
              now.getHours() + 3
            ),
          ],
        },
      },
    });
    sums.push([
      new Date(now.getFullYear(), now.getMonth() - i, 0).getTime(),
      totaluser,
    ]);
  }
  var t = new timeseries.main(sums);
  var forecastDatapoint = 11;
  var coeffs = t.ARMaxEntropy({
    data: t.data.slice(0, 10),
  });
  t.smoother({ period: 4 }).save("smoothed");
  t.sliding_regression_forecast({ sample: 20, degree: 5 });
  var forecast = 0;
  for (var i = 0; i < coeffs.length; i++) {
    forecast -= t.data[10 - i][1] * coeffs[i];
  }
  var chart_url = t.chart({
    main: true,
    points: [{ color: "ff0000", point: 20, series: 0, main: true }],
  });
  ctx.body = { forecast: forecast, chart_url: chart_url };
});

export default router;
