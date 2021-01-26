/**
  Template of schema. For fast right example.
 */

import Database from '../Database';
import * as T from '../../types';

export default class Template extends Database<T.Orm.Some> {
  
  constructor() {
    super('User');
  }

  public async GetUserById(id: number): Promise<T.OrmResult<T.Orm.Some>> {
    const sql = `SELECT * from first WHERE id=$1`;
    const s = await this.Query(sql, [id], "EE");
    return s;
  }
}