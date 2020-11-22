const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//creating schema for user's profile

const Profileschema=new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
    profilename:{
        type: String,
        required:true,
        max:10
    },
    company:{
        type: String
    },
    location:{
        type:String
    },
    position:{
        type:String,
        
    },
    skills:{
        type: [String],
        
    },
    bio:{
        type:String,
        
    },
    experience:[
        {
        title:{
        type:String,
        required: true
        },
        company:{
            type: String,
            required: true
        },
        location:{
            type: String
        },
        from:{
            type: Date,
            required: true
        },
        to:{
            type:Date
        },
        currently:{
            type:Boolean,
            default:false
        },
        description:{
            type:String
        }
    }
]
})

module.exports=Profile=mongoose.model('userprofile',Profileschema);