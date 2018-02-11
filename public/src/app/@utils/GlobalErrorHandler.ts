import { ErrorHandler, Injectable } from '@angular/core';
import { ToastService } from '../@services/toast.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private toastService: ToastService) {}

    handleError(error) {
        this.toastService.error(error);
    }
}
