import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";


export const getPosts = async (req,res) => {
    const {page} = req.query;
    console.log(page)


    try {
        const LIMIT = 8;
        const startIndex = (Number(page)-1)*LIMIT;
        const total = await PostMessage.countDocuments({});
        const postMessages = await PostMessage.find().sort({_id: -1}).limit(LIMIT).skip(startIndex);
        res.status(200).json({data:postMessages, currentPage:Number(page), totalPage:Math.ceil(total/LIMIT)});

    } catch (error) {
        console.log(`This is error message: ${error.message}`)
        res.status(404).json({message: error.message})
    }
}

export const getPostsBySearch = async (req,res) => {
    const {searchQuery, tags} = req.query

    try {
        const title = RegExp(searchQuery, "i")

        const postMessages = await PostMessage.find(tags!=='' ? {$or: [{title}, {tags: {$in: tags.split(',')}}]} : {$or: [{title}]});
        
        
        res.status(200).json({data: postMessages});
    } catch (error) {
        console.log(`This is error message: ${error.message}`)
        res.status(404).json({message: error.message})
    }
}

export const createPost = async (req,res) => {
    const post = req.body;
    const newPost = new PostMessage({...post, creator:req.userId, createdAt:new Date().toISOString()});

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        console.log(`This is error message: ${error.message}`)
        res.status(409).json({message: error.message})
        
    }
}

export const updatePost = async (req, res) => {
    const post = req.body;
    const {id: _id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id!')

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, { new: true});

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const {id: _id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id!')

    await PostMessage.findByIdAndRemove(_id);

    res.json({message: 'Post deleted successfully!'});
}

export const likePost = async (req, res) => {

    const {id: _id, like: _like} = req.params;
    if (!req.userId) return res.status(400).json({message:"Unauthenticated"})

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id!')
    const post = await PostMessage.findById(_id)

    const index = post.likes.findIndex((id)=> id === String(req.userId))

    if(index===-1){
        post.likes.push(String(req.userId))
    }else{
        post.likes = post.likes.filter((id)=> id !== String(req.userId))
    }

    const likedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true});

    res.json(likedPost);
}

const sleep = (time)=>{
    return new Promise((resolve) => setTimeout(resolve, time));
  }