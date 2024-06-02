import LocalStorageHelper from "../libs/LocalStorageHelper";
import UserRepository from "../repositories/UserRepository";

class UserService{
    userRepository=new UserRepository();
    
    constructor(){

    }

    fetchAll(callback){
       console.log(!LocalStorageHelper.exists('USERDATA'));
        if(!LocalStorageHelper.exists('USERDATA')){
            
            this.userRepository.fetchAll((data)=>{
               LocalStorageHelper.set('USERDATA',data);
            })
        }else{
            callback(LocalStorageHelper.get('USERDATA'));
        }
       
    }
}

export default UserService;