import UserConstant from "../constants/UserConstant";
class UserRepository{
    constructor(){

    }

    async fetchAll(callback){
        console.log("I got called here");
        let resp= await fetch(UserConstant.URL);
        resp.json().then((data)=>{
            callback(data[UserConstant.DATA]);
        });
    }
}

export default UserRepository;