const home = async (req, res) => {
    try{
        res.status(200).json({message: "Welcome to root by router!!"});
    }
    catch(error){
        res.status(400).send({msg : "Page Not Found!!"});
    }
}

const register = async(req, res) => {
    try{
        console.log(req.body);
        res.status(200).json({message: req.body});
    }
    catch(error){
        res.status(400).send({msg : "Page Not Found!!"});
    }
}

module.exports = {home, register};