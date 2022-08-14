import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  prinSum(prop:string){
    console.log(prop)
  }
}
