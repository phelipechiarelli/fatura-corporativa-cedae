import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class SiteFaturaoService {
    // desenvolvimento  cedae-src-dev
    private accessKeyIdDev: string = 'AKIA5ZR4K7ZDXLXS6PR2';
    private secretAccessKeyDev: string = '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';
    private region: string = 'sa-east-1';

    // produção  cedae-src-prd
    private accessKeyIdProd: string = 'AKIA5ZR4K7ZDSWPS2D6M';
    private secretAccessKeyProd: string = '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';


    accessKeyIdChanged = new Subject<string>();
    secretAccessKeyChanged = new Subject<string>();
    regionChanged = new Subject<string>();

    constructor() {
    }

    getAccessKeyIdDev(): string {
        return this.accessKeyIdDev.slice();
    }

    setAccessKeyIdDev(accessKeyId: string) {
        this.accessKeyIdDev = accessKeyId;
        this.accessKeyIdChanged.next(this.accessKeyIdDev.slice());
    }

    getSecretAccessKeyDev(): string {
        return this.secretAccessKeyDev.slice();
    }

    setSecretAccessKeyDev(secretAccessKey: string) {
        this.secretAccessKeyDev = secretAccessKey;
        this.secretAccessKeyChanged.next(this.secretAccessKeyDev.slice());
    }

    getAccessKeyIdProd(): string {
        return this.accessKeyIdProd.slice();
    }

    setAccessKeyIdProd(accessKeyId: string) {
        this.accessKeyIdProd = accessKeyId;
        this.accessKeyIdChanged.next(this.accessKeyIdProd.slice());
    }

    getSecretAccessKeyProd(): string {
        return this.secretAccessKeyProd.slice();
    }

    setSecretAccessKeyProd(secretAccessKey: string) {
        this.secretAccessKeyProd = secretAccessKey;
        this.secretAccessKeyChanged.next(this.secretAccessKeyProd.slice());
    }

    getRegion(): string {
        return this.region.slice();
    }

    setRegion(region: string) {
        this.region = region;
        this.regionChanged.next(this.region.slice());
    }

}
