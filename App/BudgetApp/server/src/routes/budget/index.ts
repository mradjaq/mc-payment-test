import express, { Request, Response } from 'express';
import Models from '../../models';

const router = express.Router();
const {Budget} = Models;

// read
router.get('/budget', async (req: Request, res: Response) => {
    const budget = await Budget.find({});

    return res.status(200).send(budget);
})

// Create
router.post('/budget', async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const budget = new Budget(body);
        await budget.save();
        return res.status(201).send(budget);
    } catch (e) {
        return res.status(400).send({message: '[Create Budget] Error',e})
    }
})

export default router