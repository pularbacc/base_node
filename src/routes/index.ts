import { Router } from 'express';

import { TestRoutes } from './TestRoutes';
import { AuthRoutes } from './AuthRoutes';
import { UserRoutes } from './UserRoutes';

export const apiRouter = Router();

apiRouter.use('/test', new TestRoutes().routes);
apiRouter.use('/auth', new AuthRoutes().routes);
apiRouter.use('/users', new UserRoutes().routes);

