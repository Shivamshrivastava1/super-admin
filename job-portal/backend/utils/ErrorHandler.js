const errorHandler = (error , res)=>{
    console.log(error);
    res.status(error.status||6000)
    res.join({
        message:error.message
    })
}
// module.exports = errorHandler
export default errorHandler