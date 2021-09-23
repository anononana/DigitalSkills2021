import Router from 'koa-router';
import Token from '../../db/models/Token/Token.model';
import User from '../../db/models/User/User.model';
import { checkLogin } from '../../middlewares/auth';
import crypto from 'crypto'
import { now } from 'sequelize/types/lib/utils';
import { CITEXT } from 'sequelize/types';
import Cashier from '../../db/models/Cashiers/Cashier.model';
import { generateWallet, Currency, generateAddressFromXPub, generatePrivateKeyFromMnemonic, btcGetBalance, sendBitcoinTransaction } from '@tatumio/tatum';
import Cafe from '../../db/models/Cafes/Cafe.model';

const router = new Router();

router.prefix('/cafe');

router.get('/', async(ctx:any) => {
    var balances: string[] = [];
    const cafes = await Cafe.findAll()
    for (var cafe of cafes) {
        const balance = await btcGetBalance(cafe.address);
        balances.push(balance.incoming)
    }
    ctx.body = {cafes, balances}
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