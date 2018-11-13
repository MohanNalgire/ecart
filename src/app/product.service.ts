import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map'

@Injectable()
export class ProductService {

    products: any = [];
    constructor(private httpvar: Http) { }


    getProducts() {

        this.httpvar.request('http://localhost:3000/products')
            .map(res =>
                res.json())
            .subscribe((result) => {
                this.products = result;
                console.log(this.products);
            })

    }


    ngOnInit() {
    }
    //  Create seperate folder for model and add one file for user model.
    createProduct(title, description) {

        let product = {
            title,
            description
        }

        let headers: Headers = new Headers({ 'content-type': 'application/json' })
        let opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        this.httpvar.post(
            'http://localhost:3000/products',
            JSON.stringify(product),
            opts
        )
            .map((res) => res.json())
            .subscribe((result: Response) => {
                // console.log('res',result);
                this.products.push(result);
            });

    }

    updateProduct(product) {
        let headers: Headers = new Headers({ 'Content-Type': 'application/json' })
        let opts: RequestOptions = new RequestOptions();
        opts.headers = headers;


        this.httpvar.put('http://localhost:3000/products' + product.id, JSON.stringify(product), opts)
            .map((res) => res.json())
            .subscribe((result: Response) => {
                console.log("user updated", result);
            });

    }


    DeleteProduct(user) {
        return this.httpvar.delete('http://localhost:3000/products/' + user.id)
            .subscribe((res) => {
                console.log('user deleted', res);
                let index = this.products.indexOf(user);
                this.products.splice(index, 1);
            });
    }

}
