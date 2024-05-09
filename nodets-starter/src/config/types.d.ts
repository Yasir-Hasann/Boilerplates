// module imports
import { Request } from 'express';
declare module 'express' {
    export interface Request {
        user?: any;
        S3?: S3;
        admin?: FirebaseAdmin;
        io?: object;
    }
}