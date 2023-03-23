
import { RouteError } from '@src/other/classes';
import { HttpStatusCodes } from '@src/constants/HttpStatusCodes';
import { Request, Response, NextFunction } from 'express';
import { EnvVars } from '@src/constants/EnvVars';
import { NodeEnvs } from '@src/constants/misc';
import { log } from '@src/utils/log';

export const errorHandler = (
  err: Error,
  _: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  log.err('--------------> on err');
  if (EnvVars.NodeEnv !== NodeEnvs.Test) {
    log.err(err, true);
  }
  let status = HttpStatusCodes.BAD_REQUEST;
  if (err instanceof RouteError) {
    status = err.status as number;
  }
  return res.status(status).json({ error: err.message });
};