import Router from 'koa-router';

import auth from './auth';
import receipt from './receipts'
import admin from './admin'

const router = new Router();

router.prefix('/');

router.get('/', (ctx: any) => {
  ctx.body = 'Hello';
});

router.use(auth.routes());
router.use(receipt.routes());
router.use(admin.routes());

export default router;