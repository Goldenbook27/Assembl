import Group from "../models/group.model.js";
import User from "../models/user.models.js";

export const createGroup = async(req,res)=>{
    try {
        const {createdBy,email,groupName,members,theme,skillsRequired} = req.body
        if(!groupName || !createdBy ){
            return res.status(400).json({message:"Group Name and created by field is required."})
        }
        if(!email){
            return res.status(400).json({message: "Email is required."})
        }
        if(!members){
            return res.status(400).json({message: "Members field is required."})
        }
        if(!theme || !skillsRequired){
            return res.status(400).json({message:"Theme and skills required is required."})
        }
        // const groupExists = await Group.findOne({})
        // if(groupExists){
        //     return res.status(400).json({message:"Group Name already exists."})

        // }
        const newGroup = new Group({
            createdBy,email,groupName,members,theme,skillsRequired
        })
        if(newGroup){
            await newGroup.save()
            res.status(201).json({
                id: newGroup._id,
                createdBy: newGroup.createdBy,
                email: newGroup.email,
                groupName: newGroup.groupName,
                members: newGroup.members,
                theme: newGroup.theme,
                skillsRequired: newGroup.skillsRequired
            })
        }else{
            res.status(400).json({
                message :"Invalid Group data"
            })
        }
       
    } catch (error) {
        console.log("Error in create group controller",error.message)
        return res.status(500).json({message:"Internal Server Error"})
    }
}

export const deleteGroup = async(req,res)=>{
    try {
        const group = await Group.findById(req.params.id)
        if(!group){
            return res.status(400).json({message: "Group not found"})
        }
        const deletedGroup = await Group.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "Group deleted successfully."})
    } catch (error) {
        console.log("Error in deleteGroup:", error.message);
        res.status(500).json({ message: "Internal Server Error." });
    }
}

export const getGroupById = async(req,res)=>{
    try {
        const group = await Group.findById(req.params.id)
        if(!group){
            return res.status(404).json({message: "Group not found."})
        }
        res.status(200).json(group)
    } catch (error) {
        console.log("Error in getGroupById:", error.message);
        res.status(500).json({ message: "Internal Server Error." });
    }
}

export const getGroupByTheme = async (req, res) => {
    try {
        const { theme } = req.params;
        const groups = await Group.find({ theme });
        if (groups.length === 0) {
            return res.status(404).json({ message: "No groups found with the relevant theme." });
        }
        res.status(200).json(groups);
    } catch (error) {
        console.log("Error in getGroupByTheme:", error.message);
        res.status(500).json({ message: "Internal Server Error." });
    }
};

export const getGroupByName = async (req, res) => {
    try {
        const { groupName } = req.params;

        if (!groupName || typeof groupName !== 'string') {
            return res.status(400).json({ message: "Invalid or missing group name." });
        }

        const group = await Group.findOne({ groupName });

        if (!group) {
            return res.status(404).json({ message: "Group with the specified name not found." });
        }

        res.status(200).json(group);
    } catch (error) {
        console.log("Error in getGroupByName:", error.message);
        res.status(500).json({ message: "Internal Server Error." });
    }
};

export const updateGroup = async (req, res) => {
    try {
        const { id } = req.body; 
        const updateData = req.body; 

        if (!id) {
            return res.status(400).json({ message: "Group ID is required." });
        }

        const updatedGroup = await Group.findByIdAndUpdate(
            id,
            { $set: updateData },
            { new: true, runValidators: true }
        );

        if (!updatedGroup) {
            return res.status(404).json({ message: "Group not found or update failed." });
        }

        res.status(200).json({
            message: "Group updated successfully.",
            data: updatedGroup,
        });
    } catch (error) {
        console.log("Error in updateGroup:", error.message);
        res.status(500).json({ message: "Internal Server Error." });
    }
};
