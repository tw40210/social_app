import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost, getPostsBySearch } from '../controllers/posts.js'
import Auth from '../middleware/Auth.js'

const router = express.Router();

router.get('/', getPosts);
router.get('/search', getPostsBySearch);
router.post('/', Auth, createPost);
router.patch('/:id', Auth, updatePost);
router.delete('/:id', Auth, deletePost);
router.patch('/:id/:like/likePost', Auth, likePost);

export default router;