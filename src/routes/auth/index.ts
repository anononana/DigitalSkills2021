import Router from 'koa-router';
import Token from '../../db/models/Token/Token.model';
import User from '../../db/models/User/User.model';
import { checkLogin } from '../../middlewares/auth';
import crypto from 'crypto'
import { now } from 'sequelize/types/lib/utils';
// import auth from './auth';
// import user from './user'

const router = new Router();

router.prefix('/auth');

router.post('/login', async (ctx: any) => {
   const body = ctx.request.body;
  const user = await User.findOne({
      where: {
          login: body.login,
          password: body.password
      }
  })
 const f = crypto.randomBytes(20).toString()
  if(user) {
      const accessToken = await Token.create({
          value: crypto.randomBytes(20).toString('hex'),
          userId: user.id,
          expiresAt: new Date().setHours(new Date().getHours() + 2)
      })
      return ctx.body = {success:true, accessToken: accessToken.value}
  }
  ctx.throw(403, {errmsg: 'Неверные данные'});
  
});

// router.post('/')

// router.use(auth.routes());
// router.use(user.routes());

export default router;