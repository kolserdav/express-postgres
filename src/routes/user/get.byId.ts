import type * as T from '../../types';
import * as orm from '../../orm';
import * as tpa from '../../tpa';

/**
 * Get schema object outside of RouteHandler!!!
 */
const User = new orm.User('GetUserById');

const GetUserById: T.RouteHandler =  async (req, res) => {
   
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { query }: any = req;
  const { id }: T.Params.User.Get = query;
  const g = new tpa.Github();
  const r = await g.GetUser('kolserdav');
  console.log(r)
  const getRes = await User.GetUserById(parseInt(id, 10), 'Error get user by id');
  if (getRes.error) {
    const errorRes: T.ServerResponse<undefined> = {
      result: 'error',
      message: getRes.message,
      data: undefined
    };
    return res.status(500).json(errorRes);
  }
  if (getRes.data.length === 0) {
    const warnRes: T.ServerResponse<void[]> = {
      result: 'warning',
      message: 'User not found',
      data: [],
    };
    return res.status(404).json(warnRes);
  }
  const successRes: T.ServerResponse<T.Res.User.Get> = {
    result: 'success',
    message: 'User received',
    data: {
      user: getRes.data[0]
    }
  }

  return res.status(200).json(successRes);
}

export default GetUserById;