import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable} from 'rxjs';
import { Product } from './interfaces/product.interface';
import { ProductService } from './services/product.service';

@Injectable({
  providedIn: 'root',
})
export class LoremResolver implements Resolve<Product[]> {
  constructor(private productService: ProductService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product[]> {
    return this.productService.getData();
  }
}
