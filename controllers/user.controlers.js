export const singnup = (req, res) => {
    try{
        return res.status(200).send('successfully create')
    }catch(error){
        console.log(error);
        return res.status(500).send('Error in Singup')
    }
}