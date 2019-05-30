import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoadingService } from '../../shared/loading';
import { NotificationService } from '../../shared/notification/notification.service';
import { API_JAVA } from '../../app.api';
import { Response } from '../../api.response.model';

@Injectable({
  providedIn: 'root'
})
export class PromissoriaService {

  constructor(
    private http: HttpClient,
    private loading: LoadingService,
    private notificationService: NotificationService
  ) {}


  populaListas() {
    return this.http.get<Response>(`${API_JAVA}/entradaSaida/listas`);
  }

  salvar(promissoria) {
    return this.http.post<Response>(`${API_JAVA}/promissoria`, promissoria)
    .subscribe(res => this.notificationService.send(res));
  }

  consultaByParams(promissoria) {
    this.loading.display(true);
    let params = new HttpParams();

    if (promissoria.cliente) { params = params.set('idCliente' , promissoria.cliente.id); }
    // if (promissoria.data) { params = params.set('data' , promissoria.data); }
    // if (promissoria.isPago) { params = params.set('isPago' , promissoria.isPago); }

    return this.http.get<Response>(`${API_JAVA}/promissoria/params`, { params });
  }
}
