import Router from 'koa-router';
import { checkLogin } from '../../middlewares/auth';

// import auth from './auth';
// import user from './user'

const router = new Router();

router.prefix('/auth');

router.post('/login', checkLogin, (ctx: any) => {
  ctx.body = ctx.user;
});

// router.post('/')

// router.use(auth.routes());
// router.use(user.routes());

export default router;