import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Response } from "../api.response.model";
import { API_JAVA } from "../app.api";
import { ResponseContentType } from "@angular/http";

@Injectable()
export class PdfServiceService {
  constructor(
    private http: HttpClient //,private notificationService:NotificationService //,private loading: LoadingService
  ) {}

  geraPdf(): Observable<Response> {
    //let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.http.get<Response>(`${API_JAVA}/cidades/all`);
  }


}
