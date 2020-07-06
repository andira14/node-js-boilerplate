import express from 'express';
import userRoute from './user/'
import adminRoute from './admin/'

const router = express.Router();

router.use('/admin', adminRoute);
router.use('/user', userRoute);
router.get('/error', (req,res) => {
    throw new Error('TEST');
    res.send('error');
})

export default router;