// handling routes
import { request } from 'express';
import mongoose from 'mongoose';
import DomainesMessage from '../models/domainesMessages.js';

// logics routes
 export const getDomaines= async(req,res) => {
    try
    {
// if koulchi khedm 
        const domainesMessages =  await DomainesMessage.find();
        console.log(domainesMessages);
        res.status(200).json(domainesMessages)
    }
    catch(error){

        res.status(404).json({message:error.message});
//error  if 
    }
    

}


export const createDomaine =async(req,res) => {

    //create domaines 
    const domaine =req.body;
    const newDomaine= new DomainesMessage(domaine);
    try{
        
      await newDomaine.save();
      res.status(201).json(newDomaine);

    }
    catch(error){

        res.status(409).json({message: error.message});
            

    }


}

export const modifierDomaine= async(req,res) =>{

    const {id:_id} = req.params;
    const domaine  =req.body;
    console.log(_id);
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No domaine  with id: id`);
   
     const domaineModifier =  await DomainesMessage.findByIdAndUpdate(_id,{...domaine,_id},{new: true});
     res.json(domaineModifier);


}


export const suprimerDomaine =async (req,res) => {
    const {id:_id}=req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No domaine  with id: id`);


    await DomainesMessage.findByIdAndDelete(_id);
    console.log('DELETE??');
    res.json({ message: "Post deleted successfully." });


}