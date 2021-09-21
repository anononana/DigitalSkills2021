import Router from 'koa-router';
import {Op} from 'sequelize'
import Receipt from '../../db/models/Receipt/Receipt.model';
import User from '../../db/models/User/User.model';
import { checkLogin } from '../../middlewares/auth';

// import auth from './auth';
// import user from './user'

const router = new Router();

router.prefix('/receipt');

router.get('/', checkLogin,async (ctx: any) => {
  const user = await User.findOne({
    where: {
      id: ctx.user
    }
  });
  const receipts = await Receipt.findAll({
    where: {
      userId: ctx.user
    }
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

router.post('/', checkLogin, async(ctx:any) => {
  const body = ctx.request.body
  const receipt = await Receipt.create({
    sum: body.sum,
    userId: ctx.user,
    printDate: body.date
  })
  ctx.body = {success:true, body: receipt}
})

// router.post('/')

// router.use(auth.routes());
// router.use(user.routes());

export default router;