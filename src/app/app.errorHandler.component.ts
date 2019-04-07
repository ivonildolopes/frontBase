import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from './shared/notification/notification.service';
//import { AuthService } from './security/auth.service';
//import { NotificationService } from './shared/messages/notification.service';

@Injectable()
export class ApplicationErrorHandler implements ErrorHandler {
    private router: Router;
    constructor(private notificationService: NotificationService,
        //private as: AuthService,
        injector: Injector) {
        setTimeout(() => this.router = injector.get(Router));
    }

    handleError(errorResponse) {
        const data = errorResponse.error;
        console.log(errorResponse)
        if (errorResponse.status === 0) {
            this.router.navigate(['/container']);
        } else if (data) {
            // console.log('entrou qui' + data)
            const messages = data.errors;
            // console.log(messages)
            switch (data.status) {
                case 400:
                    // console.log('chega aqui oh')
                    alert(messages);
                    // this.notificationService.warn2(messages, '');
                    break;
                case 401:
                    //this.as.logout();
                    break;
                case 403:
                    break;
                case 404:
                    break;
                case 500:
                    //this.ns.error([messages || 'Ocorreu um erro inesperado.'], 'Message Error');
                    //this.notificationService.info(['Ocorreu um erro inesperado.'], 'Message Error');
                    this.router.navigate(['/container']);
                    //this.notificationService.error([``], 'teste');
                    break;
            }
        }
    }
}
