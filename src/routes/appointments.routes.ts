import { Router } from 'express';

const appointmentsRouter = Router();

const appointments = [];

appointmentsRouter.post('/', (request, response) => {
    return response.json({ message: 'teste' });
});

export default appointmentsRouter;