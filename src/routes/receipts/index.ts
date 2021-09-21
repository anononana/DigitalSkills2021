import Router from 'koa-router';
import Receipt from '../../db/models/Receipt/Receipt.model';
import { checkLogin } from '../../middlewares/auth';

// import auth from './auth';
// import user from './user'

const router = new Router();

router.prefix('/receipt');

router.get('/', checkLogin,async (ctx: any) => {
  ctx.body = await Receipt.findAll({
    where: {
      userId: ctx.user
    }
  })
});

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