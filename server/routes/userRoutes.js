import express from 'express'
import {widthdrawApplication} from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { applyForJob, getUserData, getUserJobApplications, updateUserResume, registerUser, loginUser, widthdrawApplication } from '../controllers/userController.js'
import upload from '../config/multer.js'
import { protectUser } from '../middleware/authMiddleware.js'

const router = express.Router()

// User Registration
router.post('/register', registerUser)

// User Login
router.post('/login', loginUser)

// get user data
router.get('/user', protectUser, getUserData)

// apply for a job
router.post('/apply', protectUser, applyForJob)

// get applied jobs
router.get('/applications', protectUser, getUserJobApplications)

// update resume
router.post('/update-resume', protectUser, upload.single('resume'), updateUserResume)

router.patch("/:id/withdraw",authMiddleware,widthdrawApplication);

export default router