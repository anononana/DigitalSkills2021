import { Next } from 'koa';
import Token from '../../db/models/Token/Token.model'
import User from '../../db/models/User/User.model';
// import { AuthenticationError, errCodes } from '@utils/index';
// import { verifyUserToken } from '@middlewares/helper';

export default async (ctx: any, next: Next) => {
  let token: string | undefined = undefined;

  if (ctx.request.body.accessToken) {
    token = ctx.request.body.accessToken;
  }

  if (!token) {
    return ctx.throw(401,'Нет токена в запросе');
  }
  const verify = await Token.findOne({
      where: {
          value: token
      }
  });

  if(!verify) {
    return ctx.throw(403,'Токен недействителен');
  }
  ctx.user = verify!.userId;
  const user =await User.findOne({
      where: {
          id: ctx.user
      }
  })

  if(user!.isAdmin == 0) {
      ctx.throw(403, "Недостаточно прав.")
  }

  await next();
};