import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import {Http, RequestOptionsArgs, Response, Request, RequestOptions, Headers, RequestMethod} from "@angular/http";
import {Observable} from "rxjs";
import {ErrorObservable} from "rxjs/observable/ErrorObservable"
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

@Injectable({
    providedIn: 'root'
})
export class AuthProxyService {

    constructor(private storageService: StorageService) { }

    public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.sendRequest({method: RequestMethod.Get, url: url, body: ''}, options);
    }

    public post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return this.sendRequest({method: RequestMethod.Post, url: url, body: body}, options);
    }

    private sendRequest(requestOptionsArgs: RequestOptionsArgs, options?: RequestOptionsArgs): Observable<any> {
        throw Error('NOT YET FULLY IMPLEMENTED');

        let requestOptions = new RequestOptions(requestOptionsArgs);

        // add config service for fabric address?
        //requestOptions.url = this.config.fabricAdress + requestOptions.url;
        if (!requestOptions.headers){
            requestOptions.headers = new Headers();
        }

        if (this.storageService.getItem('FabricCertificate')){// PSEUDOCODE!
            requestOptions.headers.set("certId", this.storageService.getItem('FabricCertificate').id);// PSEUDOCODE!
            requestOptions.headers.set("certKey", this.storageService.getItem('FabricCertificate').key);// PSEUDOCODE!
        }
        let request = new Request(requestOptions);

        return this.http.request(request, options).map(res => res).catch(res => this.errorHandler(res));
    }

    private errorHandler(errorResponse: Response): Observable<any> | ErrorObservable<any> {
        if (errorResponse.status === 401) {
            throw Error('CERT REMOVAL NOT YET IMPLEMENTED');
        }
        return Observable.throw(errorResponse);
    }

}
