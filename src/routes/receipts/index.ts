import Router from 'koa-router';
import {Op, Sequelize} from 'sequelize'
import Receipt from '../../db/models/Receipt/Receipt.model';
import User from '../../db/models/User/User.model';
import sequelize from '../../db/sequelize';
import { checkLogin } from '../../middlewares/auth';
import accessR from '../../middlewares/auth/accessR';

// import auth from './auth';
// import user from './user'

const router = new Router();

router.prefix('/receipt');

router.post('/', checkLogin,async (ctx: any) => {
  const user = await User.findOne({
    where: {
      id: ctx.user
    }
  });
  const receipts = await Receipt.findAll({
    where: {
      userId: ctx.user
    },
    order: [['printDate', 'DESC']]
  })
  ctx.body = {receipts: receipts, userLimit: user!.limit}
});

router.post('/filter', checkLogin, async(ctx: any) => {
  const body = ctx.request.body;
  const user = await User.findOne({
    where: {
      id: ctx.user
    }
  });
  const receipts = await Receipt.findAll({
    where: {
      userId: ctx.user,
      printDate: {
        [Op.between]: [body.start, body.end]
      }
    }
  })
  ctx.body = {receipts}
})

router.post('/analyze', checkLogin, async(ctx:any) => {
  const analyzedDate = new Date()
  analyzedDate.setMonth(analyzedDate.getMonth() - 1)
  const user = await User.findOne({
    where: {
      id: ctx.user
    }
  });
  const receipts = await Receipt.findAll({
    where: {
      userId: ctx.user,
      printDate: {
        [Op.between]: [analyzedDate, new Date()]
      }
    }
  })
  let sum = 0
  receipts.forEach(element => {
    sum += element.sum
  });
  ctx.body={spentMoney: sum, leftover: user!.limit - sum}

});

router.post('/create', checkLogin, async(ctx:any) => {
  const body = ctx.request.body
  const receipt = await Receipt.create({
    sum: body.sum,
    userId: ctx.user,
    printDate: body.date
  })
  ctx.body = {success:true, body: receipt}
})

router.post('/generalStat', accessR, async(ctx:any) => {
  var now;
  const body = ctx.request.body
  if (!body.targetMonth) {
   now = new Date()
  } else {
   now = new Date(body.targetYear, body.targetMonth)
  }
  const receipts = await Receipt.findAll({
    where: {
      printDate: {
        [Op.between]: [new Date(now.getFullYear(), now.getMonth(), 1, now.getHours() + 3), new Date(now.getFullYear(), now.getMonth() + 1, 0, now.getHours() + 3)]
      }
    },
    order: [['printDate', 'DESC']]
  })
  const total = await Receipt.sum('sum', {
    where: {
      printDate: {
        [Op.between]: [new Date(now.getFullYear(), now.getMonth(), 1, now.getHours() + 3), new Date(now.getFullYear(), now.getMonth() + 1, 0, now.getHours() + 3)]
      }
    }
  });
  ctx.body={receipts: receipts, total: total}
})

router.post('/averageMonthSum', accessR, async(ctx:any) => {
  var now;
  const body = ctx.request.body
  if (!body.targetMonth) {
   now = new Date()
  } else {
   now = new Date(body.targetYear, body.targetMonth)
  }
  const receipts = await Receipt.findAll({
    where: {
      printDate: {
        [Op.between]: [new Date(now.getFullYear(), now.getMonth(), 1, now.getHours() + 3), new Date(now.getFullYear(), now.getMonth() + 1, 0, now.getHours() + 3)]
      }
    },
    order: [['printDate', 'DESC']]
  })
  const total = await Receipt.sum('sum', {
    where: {
      printDate: {
        [Op.between]: [new Date(now.getFullYear(), now.getMonth(), 1, now.getHours() + 3), new Date(now.getFullYear(), now.getMonth() + 1, 0, now.getHours() + 3)]
      }
    }
  });
  const receiptslast = await Receipt.findAll({
    where: {
      printDate: {
        [Op.between]: [new Date(now.getFullYear(), now.getMonth() - 1, 1, now.getHours() + 3), new Date(now.getFullYear(), now.getMonth(), 0, now.getHours() + 3)]
      }
    },
    order: [['printDate', 'DESC']]
  })
  const totallast = await Receipt.sum('sum', {
    where: {
      printDate: {
        [Op.between]: [new Date(now.getFullYear(), now.getMonth() - 1, 1, now.getHours() + 3), new Date(now.getFullYear(), now.getMonth(), 0, now.getHours() + 3)]
      }
    }
  });
  ctx.body={currentMonthAvg: total / (receipts.length), lastMonthAvg: totallast / (receipts.length)}
})

router.post('/averageDaySum', accessR, async(ctx:any) => {
  var now;
  const body = ctx.request.body
  if (!body.targetMonth) {
   now = new Date()
  } else {
   now = new Date(body.targetYear, body.targetMonth, 0)
  }
  const receipts = await Receipt.findAll({
    where: {
      printDate: {
        [Op.between]: [new Date(now.getFullYear(), now.getMonth(), 1, now.getHours() + 3), new Date(now.getFullYear(), now.getMonth() + 1, 0, now.getHours() + 3)]
      }
    },
    order: [['printDate', 'DESC']]
  })
  const total = await Receipt.sum('sum', {
    where: {
      printDate: {
        [Op.between]: [new Date(now.getFullYear(), now.getMonth(), 1, now.getHours() + 3), new Date(now.getFullYear(), now.getMonth() + 1, 0, now.getHours() + 3)]
      }
    }
  });
  const receiptslast = await Receipt.findAll({
    where: {
      printDate: {
        [Op.between]: [new Date(now.getFullYear(), now.getMonth() - 1, 1, now.getHours() + 3), new Date(now.getFullYear(), now.getMonth(), 0, now.getHours() + 3)]
      }
    },
    order: [['printDate', 'DESC']]
  })
  const totallast = await Receipt.sum('sum', {
    where: {
      printDate: {
        [Op.between]: [new Date(now.getFullYear(), now.getMonth() - 1, 1, now.getHours() + 3), new Date(now.getFullYear(), now.getMonth(), 0, now.getHours() + 3)]
      }
    }
  });
  ctx.body={currentMonthAvg: total / (new Date(now.getFullYear(),now.getMonth()+1, 0 ).getDate()), lastMonthAvg: totallast / (new Date(now.getFullYear(),now.getMonth(), 0 ).getDate())}
})

router.post('/userList', accessR, async(ctx:any) => {
  var greedyUsers: Object[] = [];
  var m: User[] = [];
  var now: Date;
  const body = ctx.request.body
  if (!body.targetMonth) {
   now = new Date()
  } else {
   now = new Date(body.targetYear, body.targetMonth, 0)
  }
  const users = await User.findAll()
  // greedyUsers.push(...users)
  for(var user of users) {
    const totaluser = await Receipt.sum('sum', {
      where: {
        printDate: {
          [Op.between]: [new Date(now.getFullYear(), now.getMonth() - 1, 1, now.getHours() + 3), new Date(now.getFullYear(), now.getMonth(), 0, now.getHours() + 3)]
        },
        userId: user.id
      }
    });
    if(user.limit < totaluser) {
      greedyUsers.push(user)
    }
  }
  // users.forEach(async element => {
  //   const totaluser = await Receipt.sum('sum', {
  //     where: {
  //       printDate: {
  //         [Op.between]: [new Date(now.getFullYear(), now.getMonth() - 1, 1, now.getHours() + 3), new Date(now.getFullYear(), now.getMonth(), 0, now.getHours() + 3)]
  //       },
  //       userId: element.id
  //     }
  //   });
  //   greedyUsers.push(element)
  //   m.push(element)
  // })
  // console.log(greedyUsers)
  ctx.body= greedyUsers
})

// router.post('/')

// router.use(auth.routes());
// router.use(user.routes());

export default router;