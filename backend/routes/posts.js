import express from 'express';

import { getPost, getPosts, createPost, updatePost, deletePost, likePost, getPostsBySearch, commentPost } from '../controllers/posts.js'
import Auth from '../middleware/auth.js'

const router = express.Router();

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/', Auth, createPost);
router.post('/:id/commentPost', Auth, commentPost);
router.patch('/:id', Auth, updatePost);
router.delete('/:id', Auth, deletePost);
router.patch('/:id/:like/likePost', Auth, likePost);

export default router;