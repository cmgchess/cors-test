const data = (req, res) => {
    const data ={
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    }
    const origin = req.get('Origin')
    console.log("route hit", origin)
    res.status(200).send(data);
};


module.exports = {
    data
};