import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoadingService } from '../../shared/loading';
import { NotificationService } from '../../shared/notification/notification.service';
import { API_JAVA } from 'src/app/app.api';
import { Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
// import 'rxjs/add/operator/finally';
// import 'rxjs/add/operator/delay';
// import 'rxjs/add/operator/finally';
import { Response } from 'src/app/api.response.model';


@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor(
    private http: HttpClient,
    private loading: LoadingService,
    private notificationService: NotificationService
  ) {}

  salvar(veiculo: any) {
    return this.http.post<Response>(`${API_JAVA}/veiculo`, veiculo)
    .subscribe(res => this.notificationService.send(res));
      // .subscribe(res => {
      //   console.log(res.status);
      //   this.notificationService.info(['Arquivo enviado com sucesso!'], 'Upload de Arquivo');
      // });
  }

//   adicionarAgendaEvento(agendaDto: any) {
//     this.loading.display(true)
//     return this.http.post<Response>(`${API_JAVA}/agenda/evento`, agendaDto)
//     .pipe(
//       finalize(() => {
//         this.loading.display(false);
//       }).do(resp => this.notificationService.send(resp));
// }

  update(id, veiculo) {
    return this.http.put<Response>(`${API_JAVA}/veiculo/${id}`, veiculo)
    .subscribe(res => this.notificationService.send(res));
      // .subscribe(res => {
      //   console.log(res.status);
      //   this.notificationService.info(['Arquivo enviado com sucesso!'], 'Upload de Arquivo');
      // });
  }

  veiculoById(id) {
    this.loading.display(true);
    return this.http.get<Response>(`${API_JAVA}/veiculo/${id}`);
    // return this.http.get<Response>(`${API_JAVA}/veiculo/{id}`).pipe(
    //   finalize(res => {
    //     this.loading.display(false);
    //     res => res.data;
    //   })
    // );
  }

  consultaByParams(veiculo) {
    this.loading.display(true);
    let params = new HttpParams();

    if (veiculo.placa) { params = params.set('placa' , veiculo.placa); }
    if (veiculo.renavam) { params = params.set('renavam' , veiculo.renavam); }
    if (veiculo.chassi) { params = params.set('chassi' , veiculo.chassi); }

    if (veiculo.modelo) { params = params.set('modelo' , veiculo.modelo); }
    if (veiculo.anoModelo) { params = params.set('anoModelo' , veiculo.anoModelo); }
    if (veiculo.anoFabricacao) { params = params.set('anoFabricacao' , veiculo.anoFabricacao); }
    if (veiculo.cor) { params = params.set('cor' , veiculo.cor); }

    if (veiculo.isVendido) { params = params.set('isVendido' , veiculo.isVendido); }

    return this.http.get<Response>(`${API_JAVA}/veiculo/params`, { params });
    // return this.http.get<Response>(`${API_JAVA}/veiculo/{id}`).pipe(
    //   finalize(res => {
    //     this.loading.display(false);
    //     res => res.data;
    //   })
    // );
  }


}
