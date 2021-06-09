import mongoose from 'mongoose';
const domainesSchema =mongoose.Schema(
    {
        NameDomaines:String,
        DescriptionDomaines:String,
        ChefDomaines:String,
        imageFile: String,
        DateDernierMod:{
                type:Date,
                default : new Date()

        },
        processlier: [String],
        EmpCount: {
            type: Number,
            default: 0,
        },
    }
);

const DomainesMessage =mongoose.model('DomaineMessage',domainesSchema);


export default DomainesMessage;