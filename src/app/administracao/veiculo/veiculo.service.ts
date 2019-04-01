import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../../shared/loading';
import { NotificationService } from '../../shared/notification/notification.service';
import { API_JAVA } from 'src/app/app.api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor(
    private http: HttpClient,
    private loading: LoadingService,
    private notificationService: NotificationService
  ) {}

  salvar(veiculo): Observable<Response> {
    return this.http.post<Response>(`${API_JAVA}/veiculo`, veiculo);
      // .subscribe(res => {
      //   console.log(res.status);
      //   this.notificationService.info(['Arquivo enviado com sucesso!'], 'Upload de Arquivo');
      // });
  }


}
