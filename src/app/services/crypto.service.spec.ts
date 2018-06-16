import { TestBed, inject } from '@angular/core/testing';

import { CryptoService } from './crypto.service';

describe('CryptoService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CryptoService]
        });
    });

    it('Create CryptoService', inject([CryptoService], (service: CryptoService) => {
        expect(service).toBeTruthy();
    }));

    /*==============================================================
    * ==================== Key Generation Tests ====================
    * ==============================================================
    */

    it('Create two keys', inject([CryptoService], (service: CryptoService) => {
        expect(service.generateKeyPair().length).toBe(2);
    }));

    it('PrivateKey is not empty', inject([CryptoService], (service: CryptoService) => {
        expect(service.generateKeyPair()[0].length).toBeGreaterThan(0);
    }));

    it('PublicKey is not empty', inject([CryptoService], (service: CryptoService) => {
        expect(service.generateKeyPair()[1].length).toBeGreaterThan(0);
    }));

    it('KeyPair first index is PrivateKey', inject([CryptoService], (service: CryptoService) => {
        let keypair = service.generateKeyPair();
        console.log(keypair[0])
        expect(keypair[0].includes('-----BEGIN RSA PRIVATE KEY-----')).toBe(true);
    }));

    it('KeyPair second index is PublicKey', inject([CryptoService], (service: CryptoService) => {
        let keypair = service.generateKeyPair();
        console.log(keypair[1])
        expect(keypair[1].includes('-----BEGIN PUBLIC KEY-----')).toBe(true);
    }));

    /*==============================================================
    * ====================== Encryption Tests ======================
    * ==============================================================
    */

    it('Encrypt simple Object', inject([CryptoService], (service: CryptoService) => {
        let priv_key = `-----BEGIN RSA PRIVATE KEY-----
        MIICXQIBAAKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb9I5XRb6khyfD1Yt3YiCgQ
        WMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76xFxdU6jE0NQ+Z+zEdhUTooNR
        aY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4gwQco1KRMDSmXSMkDwIDAQAB
        AoGAfY9LpnuWK5Bs50UVep5c93SJdUi82u7yMx4iHFMc/Z2hfenfYEzu+57fI4fv
        xTQ//5DbzRR/XKb8ulNv6+CHyPF31xk7YOBfkGI8qjLoq06V+FyBfDSwL8KbLyeH
        m7KUZnLNQbk8yGLzB3iYKkRHlmUanQGaNMIJziWOkN+N9dECQQD0ONYRNZeuM8zd
        8XJTSdcIX4a3gy3GGCJxOzv16XHxD03GW6UNLmfPwenKu+cdrQeaqEixrCejXdAF
        z/7+BSMpAkEA8EaSOeP5Xr3ZrbiKzi6TGMwHMvC7HdJxaBJbVRfApFrE0/mPwmP5
        rN7QwjrMY+0+AbXcm8mRQyQ1+IGEembsdwJBAN6az8Rv7QnD/YBvi52POIlRSSIM
        V7SwWvSK4WSMnGb1ZBbhgdg57DXaspcwHsFV7hByQ5BvMtIduHcT14ECfcECQATe
        aTgjFnqE/lQ22Rk0eGaYO80cc643BXVGafNfd9fcvwBMnk0iGX0XRsOozVt5Azil
        psLBYuApa66NcVHJpCECQQDTjI2AQhFc1yRnCU/YgDnSpJVm1nASoRUnU8Jfm3Oz
        uku7JUXcVpt08DFSceCEX9unCuMcT72rAQlLpdZir876
        -----END RSA PRIVATE KEY-----`;

        let pub_key = `-----BEGIN PUBLIC KEY-----
        MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlOJu6TyygqxfWT7eLtGDwajtN
        FOb9I5XRb6khyfD1Yt3YiCgQWMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76
        xFxdU6jE0NQ+Z+zEdhUTooNRaY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4
        gwQco1KRMDSmXSMkDwIDAQAB
        -----END PUBLIC KEY-----`;

        var p1 = {name:"hans", driver:true};
        var p2 = {name:"wurst", driver:false};

        var car = {type:"Fiat",
        model:500.1,
        color:"white",
        passengers: [p1, p2]};

        let target_enc_string = JSON.stringify(car);
        service.encryptData(car, pub_key);
        service.decryptData(car, priv_key);
        let enc_string = JSON.stringify(car);
        expect(enc_string).toBe(target_enc_string);
    }));

    it('Exclude object members starting with an underscore', inject([CryptoService], (service: CryptoService) => {
        let priv_key = `-----BEGIN RSA PRIVATE KEY-----
        MIICXQIBAAKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb9I5XRb6khyfD1Yt3YiCgQ
        WMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76xFxdU6jE0NQ+Z+zEdhUTooNR
        aY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4gwQco1KRMDSmXSMkDwIDAQAB
        AoGAfY9LpnuWK5Bs50UVep5c93SJdUi82u7yMx4iHFMc/Z2hfenfYEzu+57fI4fv
        xTQ//5DbzRR/XKb8ulNv6+CHyPF31xk7YOBfkGI8qjLoq06V+FyBfDSwL8KbLyeH
        m7KUZnLNQbk8yGLzB3iYKkRHlmUanQGaNMIJziWOkN+N9dECQQD0ONYRNZeuM8zd
        8XJTSdcIX4a3gy3GGCJxOzv16XHxD03GW6UNLmfPwenKu+cdrQeaqEixrCejXdAF
        z/7+BSMpAkEA8EaSOeP5Xr3ZrbiKzi6TGMwHMvC7HdJxaBJbVRfApFrE0/mPwmP5
        rN7QwjrMY+0+AbXcm8mRQyQ1+IGEembsdwJBAN6az8Rv7QnD/YBvi52POIlRSSIM
        V7SwWvSK4WSMnGb1ZBbhgdg57DXaspcwHsFV7hByQ5BvMtIduHcT14ECfcECQATe
        aTgjFnqE/lQ22Rk0eGaYO80cc643BXVGafNfd9fcvwBMnk0iGX0XRsOozVt5Azil
        psLBYuApa66NcVHJpCECQQDTjI2AQhFc1yRnCU/YgDnSpJVm1nASoRUnU8Jfm3Oz
        uku7JUXcVpt08DFSceCEX9unCuMcT72rAQlLpdZir876
        -----END RSA PRIVATE KEY-----`;

        let pub_key = `-----BEGIN PUBLIC KEY-----
        MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlOJu6TyygqxfWT7eLtGDwajtN
        FOb9I5XRb6khyfD1Yt3YiCgQWMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76
        xFxdU6jE0NQ+Z+zEdhUTooNRaY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4
        gwQco1KRMDSmXSMkDwIDAQAB
        -----END PUBLIC KEY-----`;

        var p1 = {name:"hans", driver:true};
        var p2 = {name:"wurst", driver:false};

        var car = {type:"Fiat",
        model:500.1,
        color:"white",
        _noEncryptionOnThisField:"test",
        passengers: [p1, p2]};

        let target_enc_string = JSON.stringify(car);
        service.encryptData(car, pub_key);
        expect(car['_noEncryptionOnThisField']).toBe("test");
    }));

});
