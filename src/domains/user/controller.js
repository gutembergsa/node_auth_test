const UserModel = require("./model")
const { hashData } = require("../../utils/hashData")

const createNewUser = async (data) => {
    try {
        const { name, email,  password } = data;
        const existingUser = UserModel.findOne({email})
        if (existingUser) {
            throw Error("User already exist");
        }

        const hashPassword = hashData(password);
        const newUser = new UserModel({
            name, 
            email, 
            password: hashPassword
        });
        //return new user
        return await newUser.save()
    } catch (error) {
        throw error;
    }
}

module.exports = { createNewUser }