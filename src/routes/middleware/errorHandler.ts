import { RouteError } from '@src/other/classes';
import logger from 'jet-logger';
import { HttpStatusCodes } from '@src/constants/HttpStatusCodes';
import { Request, Response, NextFunction } from 'express';
import { EnvVars } from '@src/constants/EnvVars';
import { NodeEnvs } from '@src/constants/misc';

export const errorHandler = (
  err: Error,
  _: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  logger.err('--------------> on err');
  if (EnvVars.NodeEnv !== NodeEnvs.Test) {
    logger.err(err, true);
  }
  let status = HttpStatusCodes.BAD_REQUEST;
  if (err instanceof RouteError) {
    status = err.status as number;
  }
  return res.status(status).json({ error: err.message });
};