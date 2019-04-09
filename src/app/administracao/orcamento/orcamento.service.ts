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
export class OrcamentoService {

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

  salvar(orcamento) {
    return this.http.post<Response>(`${API_JAVA}/orcamento`, orcamento)
    .subscribe(res => this.notificationService.send(res));
  }

  consultaByParams(orcamento) {
    this.loading.display(true);
    let params = new HttpParams();

    if (orcamento.veiculo) { params = params.set('idVeiculo' , orcamento.veiculo.id); }
    if (orcamento.data) { params = params.set('data' , orcamento.data); }
    if (orcamento.isPago) { params = params.set('isPago' , orcamento.isPago); }

    return this.http.get<Response>(`${API_JAVA}/orcamento/params`, { params });
  }
}
