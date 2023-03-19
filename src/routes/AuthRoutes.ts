import { HttpStatusCodes } from '@src/constants/HttpStatusCodes';
import SessionUtil from '@src/utils/SessionUtil';
import AuthService from '@src/services/AuthService';

import { IReq, IRes } from './types/express/misc';

import { Router } from 'express';

interface ILoginReq {
  email: string;
  password: string;
}

export class AuthRoutes {
  private _routes: Router;

  public constructor() {
    this._routes = Router();

    this._routes.post('/login', this.login);
    this._routes.get('/:id', this.logout);
  }

  public get routes() {
    return this._routes;
  }

  private login = async (req: IReq<ILoginReq>, res: IRes) => {
    const { email, password } = req.body;
    const user = await AuthService.login(email, password);
    await SessionUtil.addSessionData(res, {
      id: user.id,
      email: user.name,
      name: user.name,
      role: user.role,
    });
    return res.status(HttpStatusCodes.OK).end();
  };

  private logout = (_: IReq, res: IRes) => {
    SessionUtil.clearCookie(res);
    return res.status(HttpStatusCodes.OK).end();
  };
}
