import { Data } from '@angular/router';

export class ItemMenuDTO {
    constructor(
      public name?: string,
      public url?: string,
      public icon?: string,
      // public canLoad?: any[],
      // public data?: Data,
      public children?: ChildrenDTO[]
      ) {}
}

export class ChildrenDTO {
  constructor(
    public name?: string,
    public url?: string,
    public icon?: string
    // public canLoad?: any[],
    // public data?: Data
  ) {}
}
