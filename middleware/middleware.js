const {User}=require('./../models/user')

let authenticate=(req,res,next)=>{
let token=req.header('x-auth');
User.findByToken(token).then(function(u){
  if(!u)
  {
     return Promise.reject()
  }
  req.user=u;
  req.token=token;
  next();
}).catch((e)=>{
  res.status(401).send();
});
}

module.exports={authenticate};
