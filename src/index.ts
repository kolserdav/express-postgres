/**
 * Server endpoint file
 */
import dotenv from 'dotenv';
dotenv.config();

import type { Env } from './types';
import express from 'express';
import * as routes from './routes';

const processEnv: any = process.env;
const env: Env = processEnv;
const { API_PORT } = env;

const app = express();

app.get('/', routes.user.getById);

app.listen(parseInt(API_PORT), () => {
    console.info(`Listen on port: ${API_PORT}`);
});