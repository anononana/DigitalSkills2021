import Router from 'koa-router';
import Token from '../../db/models/Token/Token.model';
import User from '../../db/models/User/User.model';
import { checkLogin } from '../../middlewares/auth';
import crypto from 'crypto'
import { now } from 'sequelize/types/lib/utils';
import { CITEXT } from 'sequelize/types';
import Cashier from '../../db/models/Cashiers/Cashier.model';

const router = new Router();

router.prefix('/cashier');

router.post('/find', async(ctx:any) => {
    const body = ctx.request.body
    const cashier = await Cashier.findOne({
        where: {
            nfc: body.nfc
        }
    })
    const user = await User.findOne({
        where: {
            id: cashier?.userId
        }
    })
    const accessToken = await Token.create({
        value: crypto.randomBytes(20).toString('hex'),
        userId: user!.id,
        expiresAt: new Date(new Date().getFullYear() + 2)
    })

    ctx.body = {user: user, cashierId: cashier!.id, accessToken: accessToken.value}
})



export default router;