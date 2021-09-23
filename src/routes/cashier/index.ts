import Router from 'koa-router';
import Token from '../../db/models/Token/Token.model';
import User from '../../db/models/User/User.model';
import { checkLogin } from '../../middlewares/auth';
import crypto from 'crypto'
import { now } from 'sequelize/types/lib/utils';
import { CITEXT } from 'sequelize/types';
import Cashier from '../../db/models/Cashiers/Cashier.model';
import { generateWallet, Currency, generateAddressFromXPub, generatePrivateKeyFromMnemonic, btcGetBalance, sendBitcoinTransaction } from '@tatumio/tatum';

const router = new Router();

router.prefix('/cashier');

router.post('/find', async(ctx:any) => {
    const body = ctx.request.body
    const user = await User.findOne({
        where: {
            nfc: body.nfc
        }
    })
    const accessToken = await Token.create({
        value: crypto.randomBytes(20).toString('hex'),
        userId: user!.id,
        expiresAt: new Date(new Date().getFullYear() + 2)
    })
    ctx.body = {user: user, accessToken: accessToken.value}
})

router.post('/wallet', async(ctx:any) => {
    const transactionHash = await sendBitcoinTransaction(true, {
        fromAddress: [
            {
                address: "mzjZhSXbUaBUU8Mde4sMm6Ke54GG9NYgLJ",
                privateKey: "cRrN6cb91zGU3xAYMf5yywTisSkE1YsCWpAc6HoKTChE7paTFdxj"
            }
        ],
        to: [
            {
                address: "mgkWkTwjqH1gT97J1B94vSSJzzHwaQCa4u",
                value: 0.15991455
            }
        ]
    }
);
const balance = await btcGetBalance('mgkWkTwjqH1gT97J1B94vSSJzzHwaQCa4u');
})



export default router;