import query from "../db/utils";

const findAll = async () => {
    return await query(
        "SELECT user_id, first_name, last_name, email, age, subscription_date, subscription_plan, payment_method, subscription_status, subscription_duration_months FROM users"
    );
};

const findOne = async (user_id) => {
    return await query(
        "SELECT user_id, first_name, last_name, email, age, subscription_date, subscription_plan, payment_method, subscription_status, subscription_duration_months FROM users WHERE user_id = ?", [user_id]);
}; 

const addOne = async (newUser) => {
    return await query("INSERT INTO users SET ?", [newUser]); 
}; 

const updateOne = async (updatedUser, user_id) => {
    return await query("UPDATE users SET ? WHERE user_id = ?", [updatedUser, user_id]);
}; 

const removeOne = async (userID) => {
    return await query("DELETE FROM users WHERE user_id = ?", [userID,]);
};

export default {
    findAll, findOne, addOne, updateOne, removeOne };