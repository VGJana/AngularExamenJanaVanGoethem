import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    url = "http://localhost:3000/";

    constructor() { }

    getAllProducts(): Promise<string> {
        return fetch(`${this.url}users/`, { method: "GET" }).then(response => response.json())
    }

}
