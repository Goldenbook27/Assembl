import cloudinary from "../lib/cloudinary.js";
import { generateToken } from "../lib/utils.js";
import bcrypt from "bcryptjs"
import User from "../models/user.models.js";

export const getUserProfile = async(req,res)=>{
    const {userName} = req.params;
    try {
        const user = await User.findOne({userName}).select("-password").select("-updatedAt")
        if(!user) return res.status(400).json({message: "User not found"})
     
    } catch (error) {
        console.log("Error in follow get user profile controller",error.message)
        return res.status(500).json({message:"Internal Server Error"})

    }
}

export const followUnFollowUser = async(req,res)=>{
    try {
        const {id} = req.params;
        const userToModify = await User.findById(id);
        const currentUser = await User.findById(req.user._id)
        if(id === req.user._id.toString()) return res.status(400).json({message: "You cannnot follow/unfollow yourself"})

        if(!userToModify || !currentUser) return res.status(400).json({message: "User not found."})
        const isFollowing = currentUser.following.includes(id)
        
        if(isFollowing){
            await User.findByIdAndUpdate(req.user._id,{$pull :{following: id}})
            await User.findByIdAndUpdate(id,{$pull :{followers: req.user._id}})
            return res.status(200).json({message:"User unfollowed successfully"})
        }else{
            await User.findByIdAndUpdate(req.user._id,{$push :{following: id}})
            await User.findByIdAndUpdate(id,{$push :{followers: req.user._id}})
            return res.status(200).json({message:"User followed successfully"})

        }
        } catch (error) {
        console.log("Error in follow unfollow controller",error.message)
        return res.status(500).json({message:"Internal Server Error"})
    }
}

export const updateProfile = async(req,res)=>{
    const {email, userName, fullName, password } = req.body
    const userId = req.user._id
    try {
        let user = await User.findById(userId)
        if(!user) return res.status(400).json({message:"User not found"})

        if(req.params.id != userId.toString()){
            return res.status(400).json({message: "You cannot update other user profile"})
        }
            if(password){
                const salt = await bcrypt.genSalt(10)
                const hashedPassword = await bcrypt.hash(password,salt)
                user.password = hashedPassword
            }

        user.fullName = fullName || user.fullName
        user.email = email || user.email
        user.userName = userName || user.userName

        user = await user.save()
        res.status(200).json({message: "Profile updated successfully"})
    } catch (error) {
        console.log("Error in updating profile controller",error.message)
        return res.status(500).json({message:"Internal Server Error"})
    }
   
}