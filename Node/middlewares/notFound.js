const notFoundMiddleware = (req, res, next) => {
    res.status(404).json({message:"Path not found"});
}

export default notFoundMiddleware