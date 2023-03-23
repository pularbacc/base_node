import './pre-start'; // Must be the first import
//import { log } from '@src/utils/log';
import { EnvVars } from '@src/constants/EnvVars';
import server from './server';
import { log } from "@src/utils/log";

// **** Run **** //

const SERVER_START_MSG = ('Express server started on port: ' + 
  EnvVars.Port.toString());

server.listen(EnvVars.Port, () => {
  //log.info(SERVER_START_MSG
});
