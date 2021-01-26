import { Client } from 'pg';
import * as T from '../types';
import * as lib from '../lib';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { env }: any = process;
const { 
    POSTGRES_DATABASE_NAME,
    DATABASE_USER_LOGIN,
    DATABASE_USER_PASSWORD,
    DATABASE_HOST,
    DATABASE_PORT
}: T.Env = env; 

/**
 * Abstract class Database 
    
    @param name {string} - name of connection
 */
export default abstract class Database {
  
  client: Client;

  constructor(name: string) {
    this.client = new Client({
      host: DATABASE_HOST,
      user: DATABASE_USER_LOGIN,
      password: DATABASE_USER_PASSWORD,
      database: POSTGRES_DATABASE_NAME,
      port: parseInt(DATABASE_PORT),
      application_name: `ORM-${name}:${POSTGRES_DATABASE_NAME}`
    })
    this.ConnectOnce(name)
      .then(err => {
        if (err) process.exit(1);
      });
  }

  private ConnectOnce(name: string): Promise<1 | 0> {
    return new Promise(resolve => {
      this.client.connect()
      .then(() => {
        lib.Console.info(`Success connection to database "${POSTGRES_DATABASE_NAME}" for client "${name}"`);
        resolve(0);
      })
      .catch(e => {
        const errMess = `Can't connect to database "${POSTGRES_DATABASE_NAME}" for client "${name}".`;
        lib.Console.error(errMess, e, new Error());
        resolve(1);
      });
    });
  }

  /**
   * SQL query method
   * @param sql {string} - SQL command string. User variables $1,$2...
   * @param params {any[]} [[]] - array of variables
   * @param errMessage {string} [Error query] - error message 
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected Query<ResultType>(sql: string, params?: any[], errMessage = 'Error query'): Promise<T.OrmResult<ResultType>> {
    return new Promise(resolve => {
      this.client.query(sql, params || [], (err, res) => {
        if (err) {
          lib.Console.error(errMessage, err, new Error('Standart error from Query to database'));
          resolve({
            error: true,
            message: errMessage,
            // @ts-ignore
            data: []
          });
        }
        resolve({
          error: false,
          // @ts-ignore
          data: res.rows,
        });
      });
    });
  }
}