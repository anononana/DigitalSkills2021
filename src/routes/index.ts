import Router from 'koa-router';

import auth from './auth';
import receipt from './receipts'
import admin from './admin'
import cashier from './cashier'
import cafe from './cafe'

const router = new Router();

router.prefix('/');

router.get('/', (ctx: any) => {
  ctx.body = 'Hello';
});

router.use(auth.routes());
router.use(receipt.routes());
router.use(admin.routes());
router.use(cashier.routes());
router.use(cafe.routes())
export default router;