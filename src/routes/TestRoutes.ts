import { HttpStatusCodes } from '@src/constants/HttpStatusCodes';
import { IReq, IRes } from './types/express/misc';

import { Router } from 'express';
import adminMw from './middleware/adminMw';

export class TestRoutes {
  private _routes: Router;

  public constructor() {
    this._routes = Router();

    this._routes.get('/all', this.getAll);
    this._routes.post('/:id', this.postId);
  }

  public get routes() {
    return this._routes;
  }

  public getAll = (_: IReq, res: IRes) => {
    throw "hehe";
    return res.status(HttpStatusCodes.OK).json({ messages: 'ok ok' });
  };

  private postId = (req: IReq, res: IRes) => {
    const id = +req.params.id;
    return res.status(HttpStatusCodes.OK).json({ messages: id });
  };
}
