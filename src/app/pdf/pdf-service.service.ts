import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Response } from "../api.response.model";
import { API_JAVA } from "../app.api";
import { ResponseContentType } from "@angular/http";
import { LoadingService } from "../shared/loading";

@Injectable()
export class PdfServiceService {
  constructor(
      private http: HttpClient
    , private loading: LoadingService //,private notificationService:NotificationService //,private loading: LoadingService
  ) {}

  geraPdf(): Observable<Response> {
    //let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    this.loading.display(true);
    return this.http.get<Response>(`${API_JAVA}/cidades/all`)
    .pipe(
      finalize(() => {
        this.loading.display(false);
      })
    );

  }


}
