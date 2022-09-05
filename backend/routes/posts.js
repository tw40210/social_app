import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'
import Auth from '../middleware/Auth.js'

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', Auth, updatePost);
router.delete('/:id', Auth, deletePost);
router.patch('/:id/:like/likePost', Auth, likePost);

export default router;