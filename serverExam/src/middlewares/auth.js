const { validateToken } = require("../services/userService")

module.exports= ()=>(req, res, next)=>{
   const token= req.headers['x-authorization']

   if(token){
    try{
      const payload= validateToken(token);
    
      req.user= {
        username:payload.username,
        email:payload.email,
        _id: payload._id,
        token
      }
      console.log(payload)
    }catch(err){
      console.error(err);
        return res.status(401).json({message:'Invalid access token. Please log in.'})
    }

   }
    next()
}