import express from 'express'

import { getPosts, createPosts } from '../controllers/postsController.js'

const postRoutes = express.Router()

postRoutes.get('/', getPosts)
postRoutes.post('/', createPosts)

export default postRoutes
