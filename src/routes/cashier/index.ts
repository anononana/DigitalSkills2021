import Router from 'koa-router';
import Token from '../../db/models/Token/Token.model';
import User from '../../db/models/User/User.model';
import { checkLogin } from '../../middlewares/auth';
import crypto from 'crypto'
import { now } from 'sequelize/types/lib/utils';
import { CITEXT } from 'sequelize/types';
import Cashier from '../../db/models/Cashiers/Cashier.model';
import { generateWallet, Currency, generateAddressFromXPub, generatePrivateKeyFromMnemonic, btcGetBalance } from '@tatumio/tatum';

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
    // const address = await generateAddressFromXPub(
    //     Currency.BTC,
    //     false,
    //     'xpub6E9xd8uBPoC848aQHyPRevDJBhYf74MEgAdeu73KC19tBzpkKjeAqv7jGD35tvoj9bfz66bC1xWcM1aAb6PtTKZFBKyznSci4gL5ef5UryW',
    //     1
    // );
    // const privateKey = await generatePrivateKeyFromMnemonic(
    //     Currency.BTC,
    //     false,
    //     'student urban dry pudding urge mass defy output suggest stadium cactus furnace mass casino rebel dirt wait cigar animal alter aisle company chronic speed',
    //     1
    // );
// const btcWallet = await generateWallet(Currency.BTC, false);
const balance = await btcGetBalance('12V9X6TJVACZxgXynTsih1HiSFwLmyi3gf');
console.log(balance)
})



export default router;