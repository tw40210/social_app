import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModel from "../models/user.js";

const secret = 'test';

export const signIn = async (req,res) => {
    const {email, password} = req.body

    try {
        const oldUser = await UserModel.findOne(email)
        if(!oldUser) return res.status(404).json({message: "User doesn't exist"})
        
        const isPasswordCorrect = bcrypt.compare(password, oldUser.password)

        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid credentials"})

        const token = jwt.sign({email:oldUser.email, id:oldUser._id}, secret, {expiresIn: '1h'})

        res.status(200).json({result: oldUser}, token)


    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const signUp = async (req,res) => {
    const {email, password, confirmPassword, firstName, lastName} = req.body

    try {
        const oldUser = await UserModel.findOne(email)
        if(!oldUser) return res.status(400).json({message: "User already existed"})
        if(password!==confirmPassword) return res.status(400).json({message: "Password unmatched to confirmPassword"})
        
        const hashedPassword = bcrypt.hash(password, 12)

        const token = jwt.sign({email:oldUser.email, id:oldUser._id}, secret, {expiresIn: '1h'})
        const result = UserModel.create({email, password:hashedPassword, name:`${firstName} ${lastName}`})
        
        res.status(200).json(result, token)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}