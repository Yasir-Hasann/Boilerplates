// module imports
import dotenv from 'dotenv';

// file imports
import { ENVIRONMENTS } from './enums';

// destructuring assignments
const { PRODUCTION, STAGING } = ENVIRONMENTS;

dotenv.config();
dotenv.config({
  path: process.env.NODE_ENV === PRODUCTION ? '.env.production' : process.env.NODE_ENV === STAGING ? '.env.staging' : '.env.development',
});