const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next (err));
    }
}

export {asyncHandler};

// const asyncHandler = (func)=> ()=>{};
// const asyncHandler = (func)=> async()=>{};


// const asyncHandler = (fn)=>async(req,res, next)=>{
//     try {
//         await fn(req,res,next);
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         });
//     }
// };       bohot saare baar ye code likhna padta hai isliye isko ek alag file me rakhte hai, and ho sakta hai kahin try-catch use karein or kahin .then vala format.