// module imports
import * as dotenv from 'dotenv';

dotenv.config();
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

// dotenv.config({
//     path: process.env.NODE_ENV === 'production' ? '.env.production' : process.env.NODE_ENV === 'staging' ? '.env.staging' : '.env.development',
// });
