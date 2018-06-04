import { RSAModule } from './rsamodule'
import { KeyGenerator } from './key-generator'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CryptoServiceService {
    rsaMod = new RSAModule();
    keyGenerator = new KeyGenerator();

    constructor() {}

    public encryptData(obj: object, pubkey: string):void {
        if (!pubkey || 0 === pubkey.length) {throw Error("No Key provided!");}
        if (!obj) {throw Error("No Object provided!");}
        this.rsaMod.encryptData(obj, pubkey);
    }

    public decryptData(obj: object, privkey: string):void {
        if (!privkey || 0 === privkey.length) {throw Error("No Private Key provided!");}
        if (!obj) {throw Error("No Object provided!");}
        this.rsaMod.decryptData(obj, privkey);
    }

    public generateKeyPair():string[]{
        return this.keyGenerator.generateKeyPair();
    }
}
