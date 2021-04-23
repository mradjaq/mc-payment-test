import { Router } from 'express';
import budgetRouter from './budget';


const API_Route = Router();
API_Route.use([budgetRouter])

export default API_Route