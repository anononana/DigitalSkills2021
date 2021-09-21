import {Sequelize} from 'sequelize-typescript'
import config from '../config/index'
import {Op} from 'sequelize'
import User from './models/User/User.model';
import Token from './models/Token/Token.model';
import Receipt from './models/Receipt/Receipt.model';


export const OP = Op;

const sequelize = new Sequelize(config.pg);

sequelize.authenticate().then( async () => {
    if (process.env.DB_SYNC_FORCE === 'true') {
        await sequelize.sync({ force: true });
        console.log('db recreated');
        console.log('server will be closed');
        process.exit(0)
      } else {
        await sequelize.sync();
      }
}).catch((error) => {
    console.log(`Unable connect to database: ${error}`);
});
// sequelize.addModels([User, Token, Receipt]);

export default sequelize;