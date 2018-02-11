import { BodyOutputType, ToasterService } from 'angular2-toaster';
import { Injectable } from '@angular/core';
import { extend, get } from 'lodash';
import { HttpErrorResponse } from '@angular/common/http';
import { shorten } from '../@utils/shorten';

const TOAST_MESSAGE_MAXIMUM_LENGTH = 72;

@Injectable()
export class ToastService {
    constructor(private toasterService: ToasterService) {}

    defaultConfig: {
        showCloseButton: true;
        bodyOutputType: BodyOutputType.TrustedHtml;
    };

    toast(body: string): void {
        this.pop('default', this.getMessage(body));
    }

    success(body: string): void {
        this.pop('success', this.getMessage(body));
    }

    warning(body: string): void {
        this.pop('warning', this.getMessage(body));
    }

    error(body): void {
        this.pop('error', this.getErrorMessage(body));
    }

    private getMessage(message): string {
        if (typeof message === 'string') {
            return message;
        }
        if (get(message, 'message')) {
            return message.message;
        }
        console.log(message);
        return message.toString();
    }

    private getErrorMessage(error): string {
        console.error(error);

        if (typeof error === 'string') {
            return error;
        }

        switch (true) {
            case error instanceof HttpErrorResponse:
                return error.error || error.message;
            case error instanceof TypeError:
            case error instanceof Error:
                return error.message;
            default:
                return error.toString();
        }
    }

    private pop(type: string, body): void {
        body = shorten(body, TOAST_MESSAGE_MAXIMUM_LENGTH);
        this.toasterService.popAsync(extend(this.defaultConfig, { type, body }));
    }
}
