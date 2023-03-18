import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import { IReq, IRes } from './types/express/misc';

// **** Functions **** //

/**
 * Get all tests
 */
function getAll(_: IReq, res: IRes) {
  return res.status(HttpStatusCodes.OK).json({ messages: 'ok ok' });
}

function getId(req: IReq, res: IRes) {
  // convert id to int
  const id = +req.params.id;
  return res.status(HttpStatusCodes.OK).json({ messages: id});
}

// **** Export default **** //

export default {
  getAll,
  getId,
} as const;
