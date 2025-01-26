import express from 'express'
import { protectRoute } from '../middlewares/auth.middleware.js'
import { followUnFollowUser, getUserProfile } from '../controllers/userActions.controller.js'
import { updateProfile } from '../controllers/auth.controller.js';
const router = express.Router();

router.post("/follow/:id",protectRoute,followUnFollowUser)
router.post('/update-profile/:id',protectRoute,updateProfile)
router.get('/profile/:userName',getUserProfile)
export default router