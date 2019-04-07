import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoadingService } from '../../shared/loading';
import { NotificationService } from '../../shared/notification/notification.service';
import { API_JAVA } from 'src/app/app.api';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/finally';
import { Response } from 'src/app/api.response.model';

@Injectable({
  providedIn: 'root'
})
export class EntradaSaidaService {

  constructor(
    private http: HttpClient,
    private loading: LoadingService,
    private notificationService: NotificationService
  ) {}


  populaListas() {
    return this.http.get<Response>(`${API_JAVA}/entradaSaida/listas`);
  }

  salvar(entradaSaida): Observable<Response> {
    return this.http.post<Response>(`${API_JAVA}/entradaSaida`, entradaSaida);
  }
}
