import { HttpStatusCodes } from '@src/constants/HttpStatusCodes';

import UserService from '@src/services/UserService';
import { IUser } from '@src/models/User';
import { IReq, IRes } from './types/express/misc';

import { Router } from 'express';
import adminMw from './middleware/adminMw';

export class UserRoutes {
  private _routes: Router;

  public constructor() {
    this._routes = Router();

    this._routes.get('/all', adminMw, this.getAll);
    this._routes.post('/add', adminMw, this.add);
    this._routes.put('/update', adminMw, this.update);
    this._routes.delete('/delete/:id', adminMw, this.delete);
  }

  public get routes() {
    return this._routes;
  }

  private getAll = async (_: IReq, res: IRes) => {
    const users = await UserService.getAll();
    return res.status(HttpStatusCodes.OK).json({ users });
  };

  private add = async (req: IReq<{ user: IUser }>, res: IRes) => {
    const { user } = req.body;
    await UserService.addOne(user);
    return res.status(HttpStatusCodes.CREATED).end();
  };

  private update = async (req: IReq<{ user: IUser }>, res: IRes) => {
    const { user } = req.body;
    await UserService.updateOne(user);
    return res.status(HttpStatusCodes.OK).end();
  };

  private delete = async (req: IReq, res: IRes) => {
    const id = +req.params.id;
    await UserService.delete(id);
    return res.status(HttpStatusCodes.OK).end();
  };
}
