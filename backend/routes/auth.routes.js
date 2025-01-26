import express from 'express'
import { login,logout,signup,updateProfile,checkAuth } from '../controllers/auth.controller.js'
import { protectRoute } from '../middlewares/auth.middleware.js'
import { followUnFollowUser } from '../controllers/userActions.controller.js'

const router = express.Router()

router.post('/signup',signup)
router.post('/login',login)
router.post('/logout',logout)
router.put('/update-profilepic',protectRoute,updateProfile)
router.get("/check",protectRoute,checkAuth)


export default router;