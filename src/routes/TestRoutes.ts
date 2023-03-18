import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import { IReq, IRes } from './types/express/misc';

// **** Functions **** //

/**
 * Get all tests
 */
function getAll(_: IReq, res: IRes) {
  return res.status(HttpStatusCodes.OK).json({ messages: 'ok ok' });
}

// **** Export default **** //

export default {
  getAll,
} as const;
