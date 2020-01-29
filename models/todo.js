const mongoose=require('mongoose');
let Todo=mongoose.model('Todo',{
  text:{type:String,
        required:true,
        minlength:1,
        trim:true
        },
  completed:{type:Boolean,
             default:false
            },
  completedAt:{type:Number,
               default:null
             },
  _creator:{type:mongoose.Schema.Types.ObjectId,
            required:true
            }
});
/*let newtodo=new Todo({text:'  Watch the remaining lectures  '});
newtodo.save().then(function(docs){
  console.log(docs)
});*/

module.exports={Todo};
