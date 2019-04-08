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

  populaListasConsulta() {
    return this.http.get<Response>(`${API_JAVA}/entradaSaida/listas/consulta`);
  }

  salvar(entradaSaida) {
    return this.http.post<Response>(`${API_JAVA}/entradaSaida`, entradaSaida)
    .subscribe(res => this.notificationService.send(res));
  }

  consultaByParams(entradaSaida) {
    this.loading.display(true);
    let params = new HttpParams();

    if (entradaSaida.veiculo) { params = params.set('idVeiculo' , entradaSaida.veiculo.id); }
    if (entradaSaida.cliente) { params = params.set('idCliente' , entradaSaida.cliente.id); }
    if (entradaSaida.tipo) { params = params.set('tipo' , entradaSaida.tipo); }
    if (entradaSaida.dataInicio) { params = params.set('dataInicio' , entradaSaida.dataInicio); }
    if (entradaSaida.dataFim) { params = params.set('dataFim' , entradaSaida.dataFim); }


    return this.http.get<Response>(`${API_JAVA}/entradaSaida/params`, { params });
    // return this.http.get<Response>(`${API_JAVA}/veiculo/{id}`).pipe(
    //   finalize(res => {
    //     this.loading.display(false);
    //     res => res.data;
    //   })
    // );
  }
}
