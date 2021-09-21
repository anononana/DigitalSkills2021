   
import { resolve } from 'path';
import { SequelizeOptions } from 'sequelize-typescript';
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize/types';

dotenv.config();

const env = process.env.NODE_ENV || 'development'; // testing development staging production
const serverHost = process.env.SERVER_HOST || 'http://localhost:4000'

const config = {
    server: {
      env,
      host: serverHost,
      port: process.env.SERVER_PORT || 4000,
    },
    pg: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        database: process.env.DB_NAME,
        dialect: process.env.DB_DIALECT,
        username: process.env.DB_USER_NAME,
        password: process.env.DB_USER_PASS,
        storage: ':memory:',
        models: [resolve(`${process.cwd()}/src/db/models/**/*.model.ts`)],
    } as SequelizeOptions
}

export default config;