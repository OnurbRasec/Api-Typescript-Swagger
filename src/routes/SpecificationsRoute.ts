import {Router} from 'express';
import { createSpecificationController } from '../modules/cars/useCases/CreateSpecification';

import { CreateSpecificationUsecase } from '../modules/cars/useCases/CreateSpecification/CreateSpecificationUsecase';

const SpecificationsRoutes = Router();


SpecificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);

});

export {SpecificationsRoutes}