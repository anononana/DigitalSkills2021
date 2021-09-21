import Router from 'koa-router';

import auth from './auth';
import receipt from './receipts'

const router = new Router();

router.prefix('/');

router.get('/', (ctx: any) => {
  ctx.body = 'Hello';
});

router.use(auth.routes());
router.use(receipt.routes());

export default router;