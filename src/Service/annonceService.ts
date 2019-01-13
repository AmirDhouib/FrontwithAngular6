import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {environment} from "../environments/environment";
import {Observable} from "rxjs/Rx";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class AnnonceService {

    constructor(private _http: HttpClient) {
    }


    findAnnonces() {
        return this._http.get(environment.appRootUrl+"/accommodation")
    }

    addAnnonce(accommodation) {
        return this._http.post(environment.appRootUrl+"/accommodation", accommodation)
    }

    detailAnnonce(id) {
        return this._http.get(environment.appRootUrl+"/accommodation/"+id)
    }


}
