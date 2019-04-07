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
export class ClienteService {

  constructor(
    private http: HttpClient,
    private loading: LoadingService,
    private notificationService: NotificationService
  ) { }

  salvar(cliente): Observable<Response> {
    return this.http.post<Response>(`${API_JAVA}/cliente`, cliente);
  }

  update(id, cliente): Observable<Response> {
    return this.http.put<Response>(`${API_JAVA}/cliente/${id}`, cliente);
  }

  clienteById(id) {
    return this.http.get<Response>(`${API_JAVA}/cliente/${id}`);
  }

  consultaByParams(cliente) {
    this.loading.display(true);
    let params = new HttpParams();

    if (cliente.nome) { params = params.set('nome' , cliente.nome); }
    if (cliente.cpf) { params = params.set('cpf' , cliente.cpf); }
    if (cliente.rg) { params = params.set('rg' , cliente.rg); }
    if (cliente.endereco) { params = params.set('endereco' , cliente.endereco); }
    if (cliente.telefone) { params = params.set('telefone' , cliente.telefone); }
    if (cliente.email) { params = params.set('email' , cliente.email); }

    return this.http.get<Response>(`${API_JAVA}/cliente/params`, { params });
    // return this.http.get<Response>(`${API_JAVA}/veiculo/{id}`).pipe(
    //   finalize(res => {
    //     this.loading.display(false);
    //     res => res.data;
    //   })
    // );
  }
}
