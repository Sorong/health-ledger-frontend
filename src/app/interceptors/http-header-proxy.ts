import { Injectable, Injector } from '@angular/core';
import { StorageService } from '../services/storage.service'
import { StateService } from '../services/state.service';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';


@Injectable()
export class HttpHeaderProxy implements HttpInterceptor {
    constructor(private stateService: StateService, private storageService: StorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = undefined;
        let cert = this.storageService.getItem("FabricCert");
        if(cert){
          let pubkey = this.storageService.getItem("L2PublicKey");
          pubkey = pubkey.replace(/\n/g, "\\n");
          let crypto = `{ "fabricCert":${cert}, "pubKey":"${pubkey}" }`;

          crypto = btoa(crypto);

          authReq = req.clone({ headers: req.headers.set("Crypto", crypto)});
        } else {
            authReq = req.clone({ headers: req.headers});
        }
        return next.handle(authReq).catch((error, caught) => {
            if (error.status === 401) {
                this.stateService.invalidate();
            }
            return Observable.throw(error);
        }) as any;
    }
}
