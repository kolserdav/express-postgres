/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 *  Express types
 */
import type { Response, Request } from 'express'

/**
 *  Interface of route handler method
 */
export interface RouteHandler {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}

/**
 *  Environment variables type from file .env
 */
export type Env = {
    API_PORT: string;
    API_PORT: string;
    POSTGRES_DATABASE_NAME: string;
    DATABASE_USER_LOGIN: string;
    DATABASE_USER_PASSWORD: string;
    DATABASE_HOST: string;
    DATABASE_PORT: string;
}

/**
 *  One type for all results of routes
 */
export type ServerResponse<T> = {
    result: 'error' | 'warning' | 'success';
    message: string;
    data: T
}

/**
 * Type of results from orm
 */
export type OrmResult<T> = {
    error: boolean;
    message: string;
    data: T;
};

/*
    Types of routes params
*/
export namespace Params {
    namespace User {
        type Get = {
            id: string;
        }; 
    }
}

/** 
 *  Types of routes bodies
*/
export namespace Body {
    namespace User {
        type Get = {
            id: number;
        }
    }
}

/**
 *  Types of routes results
 */
export namespace Res {
    namespace User {
        type Get = {
            user: Orm.User
        };
    }
}

/**
 *  Types of database schemas
 */
export namespace Orm {
    type User = {
        id: number;
        name: string;
    };
}