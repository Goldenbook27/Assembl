import express from 'express'
import { protectRoute } from '../middlewares/auth.middleware'
import { createGroup, deleteGroup, getGroupById, getGroupByName, getGroupByTheme, updateGroup } from '../controllers/group.controller'
const router = express.Router()

router.post('/create',protectRoute,createGroup)
router.delete('/delete/:id',protectRoute,deleteGroup)
router.get('/id/:id', protectRoute, getGroupById);
router.get('/theme/:theme', protectRoute, getGroupByTheme);
router.get('/name/:groupName', protectRoute, getGroupByName);
router.put('/update',protectRoute,updateGroup)
export default router