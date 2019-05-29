import { Data } from './../dataSource/data';
import { testData } from './../dataSource/testData.';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VirtualListService {
  ServiceData=testData
  constructor() { }

  get getTableList(){
    return this.ServiceData
  }
}
