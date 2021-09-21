import Router from 'koa-router';

// import auth from './auth';
// import user from './user'

const router = new Router();

router.prefix('/');

router.get('/', (ctx: any) => {
  ctx.body = 'Hello';
});

// router.use(auth.routes());
// router.use(user.routes());

export default router;