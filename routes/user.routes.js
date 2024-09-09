import express from "express"; 
import users from "../controllers/users.controllers";

const router = express.Router(); 
// requests will reach these routes already matching /api/users

//:user_id? means id is optional 
router.get("/:user_id?", async (req, res, next) => {
    try {
        let { user_id } = req.params;
        console.log (req.parms);  
        let data; 
        if (user_id) {
            data = await users.findOne(user_id); 
        } else {
            data = await users.findAll(); 
        } 
        res.json(data);
    } catch (err){
        next(err); 
    }
}); 

router.post("/", async (req, res, next) => {
    try {
        let newUser = req.body; 
        let data = await users.addOne(newUser); 
        res.json(data); 
    } catch (err){
        next(err); 
    }
});  

//requires an user_id to update that user
router.put("/:user_id", async (req, res, next) => {
    try {
        let { user_id } = req.params; 
        let updatedUser = req.body; 
        let data = await users.updateOne(updatedUser, user_id); 
        res.json(data); 
    } catch (err){
        next(err); 
    }
}); 

router.delete("/:user_id", async (req, res, next) => {
    try {
        let { user_id } = req.params; 
        let data = await users.removeOne(user_id);
        res.json(data); 
        } catch (err){
        next(err); 
    }
});  

export default router; 