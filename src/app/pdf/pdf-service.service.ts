import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Response } from "../api.response.model";
import { API_JAVA } from "../app.api";

@Injectable(
)
export class PdfServiceService {
  constructor(
    private http: HttpClient
  ) //,private notificationService:NotificationService
  //,private loading: LoadingService
  {}

  geraPdf(): Observable<Response> {
    return this.http.get<Response>(`${API_JAVA}/cidades/all`);
  }
}
