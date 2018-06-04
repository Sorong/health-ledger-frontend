import * as Encrypt from 'jsencrypt';

export class KeyGenerator {

    constructor(){}

    public generateKeyPair():string[] {
        let jscrypto = new Encrypt.JSEncrypt();
        let privatekey = jscrypto.getPrivateKey();
        let publickey = jscrypto.getPublicKey();
        return [privatekey, publickey];
    }
}
