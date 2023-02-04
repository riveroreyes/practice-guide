import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { delay, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getData(): Observable<Product[]> {
    const res = [
      { id: 1, name: 'carlos', age: 54 },
      { id: 2, name: 'maria', age: 83 },
    ];
    return of(res).pipe(
      delay(2000),
      map((re: Product[]) => {
        console.log(re,' ==> ','re'.toUpperCase());
        return re.map((e:Product) => ({...e, age: e.age+100}) );
      })
    );    
  }
}
