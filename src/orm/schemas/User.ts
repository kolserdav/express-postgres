import Database from '../Database';
import * as T from '../../types';


export default class User extends Database {
  
  constructor(name: string) {
    super(name);
  }

  public async GetUserById(id: number, errMessage: string): Promise<T.OrmResult<T.Orm.User[]>> {
    const sql = `SELECT id, name from first WHERE id=$1`;
    return await this.Query<T.Orm.User[]>(sql, [id], errMessage);
  }
}