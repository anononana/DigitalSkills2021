import Router from 'koa-router';
import Token from '../../db/models/Token/Token.model';
import User from '../../db/models/User/User.model';
import { checkLogin } from '../../middlewares/auth';
import crypto from 'crypto'
import { now } from 'sequelize/types/lib/utils';
import { CITEXT } from 'sequelize/types';
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
  const exp = new Date()
  exp.setHours(exp.getHours() + 2)
  if(user) {
      const accessToken = await Token.create({
          value: crypto.randomBytes(20).toString('hex'),
          userId: user.id,
          expiresAt: exp
      })
      return ctx.body = {success:true,user: user, accessToken: accessToken.value}
  }
  ctx.throw(403, {errmsg: 'Неверные данные'});
  
});

router.post('/register', async (ctx: any) => {
    const body = ctx.request.body;
   const user = await User.create({
       login: body.login,
       password: body.password,
       name: body.name,
       surname: body.surname,
       limit: body.limit
   })
   ctx.body = {user};
 });


// router.post('/')

// router.use(auth.routes());
// router.use(user.routes());

export default router;