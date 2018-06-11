import * as Encrypt from 'jsencrypt';

export class RSAModule {

    constructor(){}

    public encryptData(obj: object, pubkey: string):void {
        if (!pubkey || 0 === pubkey.length) {throw Error("No Key provided!");}
        if (!obj) {throw Error("No Object provided!");}

        let jscrypto = new Encrypt.JSEncrypt();
        jscrypto.setPublicKey(pubkey);
        this.recursiveCrypt(obj, jscrypto)
    }

    public decryptData(obj: object, privkey: string):void {
        if (!privkey || 0 === privkey.length) {throw Error("No Private Key provided!");}
        if (!obj) {throw Error("No Object provided!");}

        let jscrypto = new Encrypt.JSEncrypt();
        jscrypto.setPrivateKey(privkey);
        this.recursiveCrypt(obj, jscrypto, true)
    }

    /**
    * recursiveCrypt - Recursively encrypts or decrypts all attribute
    * fields of an object and its nested members.
    * Attribute types are stored in a helper object which replaces the original field value.
    * Simple types are restored upon decryption.
    *
    * @param  {Object} obj The object to be decrypted/encrypted
    * @param  {JSEncrypt} jsencrypt_instance An instance of JSEncrypt with initialized key.
    * @param  {boolean} decryptFlag=false  Flag to determine encryption (default) or decryption
    */
    private recursiveCrypt(obj, jsencrypt_instance, decryptFlag=false):void {
        for (var property in obj) { // iterate over all properties of the object
            if (obj.hasOwnProperty(property)) { // exclude inherited fields
                if (typeof obj[property] == "object" && !(obj[property] instanceof encObj)) {
                    // recursively call the function for all members which are non-primitive
                    // and not the helper object replacing an original value
                    this.recursiveCrypt(obj[property], jsencrypt_instance, decryptFlag);
                } else {
                    // in case of a primitive type or helper object
                    if(decryptFlag == false){
                        let dtype = typeof(obj[property]); // save the value type for later reconstruction
                        let val = jsencrypt_instance.encrypt(String(obj[property])); // encrypt the value
                        // replace the value with a helper object containing its type and encrypted string
                        obj[property] = new encObj(val, dtype);
                    } else {
                        // decrypt the value string
                        obj[property].val = jsencrypt_instance.decrypt(obj[property].val);
                        // restore its original type
                        obj[property] = this.reconstructType(obj[property]);
                    }
                }
            }
        }
    }

    /**
    * reconstructType - Helper function to restore the original type of an encObj.
    *
    * @param  {encObj} _encObj Decrypted encObj instance
    * @return {number, boolean, string} _encObj.val casted to _encObj.dtype
    */
    private reconstructType(_encObj: encObj):object {
        let castedObj = null;
        switch(_encObj.dtype) {
            case "number":
                castedObj = Number(_encObj.val);
                break;
            case "boolean":
                castedObj = (_encObj.val == "true");
                break;
            default:
                castedObj = _encObj.val;
        }
        return castedObj;
    }

}

/**
* Helper object to replace field values with their
* encrypted string representation and their original type
*/
export class encObj {
    val: string;
    dtype: string;
    constructor(val, dtype) {
        this.val = val;
        this.dtype = dtype;
    }
}
