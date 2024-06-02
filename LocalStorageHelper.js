class LocalStorageHelper{

    static get(key){
       
        return localStorage.getItem(key);
    }

    static set(key,value){
        localStorage.setItem(key,value);
    }

    static exists(key){
        return (this.get(key)!==null);
    }

}
export default LocalStorageHelper;