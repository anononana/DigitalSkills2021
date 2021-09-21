import { Next } from 'koa';
import Token from '../../db/models/Token/Token.model'
import User from '../../db/models/User/User.model';
// import { AuthenticationError, errCodes } from '@utils/index';
// import { verifyUserToken } from '@middlewares/helper';

export default async (ctx: any, next: Next) => {
  let token: string | undefined = undefined;

  if (ctx.request.headers && ctx.request.headers['authorization']) {
    token = ctx.request.headers['authorization'].split('Bearer ')[1];
  }

  if (!token) {
    ctx.throw(401,'Нет токена в заголовке');
  }
  const user = await User.findAll();
  const verify = await Token.findOne({
      where: {
          value: token
      }
  });

  if(!verify) {
    ctx.throw(403,'Токен недействителен');
  }

  ctx.user = verify!.userId;

  await next();
};