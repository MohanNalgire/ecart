import { Injectable } from '@angular/core';

//import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class ProductService {

    products: any = [];
    constructor(private httpvar: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'my-auth-token'
        })
    };

    getProducts() {

        this.httpvar.get('http://localhost:3000/products')
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


        this.httpvar.post(
            'http://localhost:3000/products',
            JSON.stringify(product),
            this.httpOptions
        )
            .subscribe((result: Response) => {
                console.log('res',result);
                this.products.push(result);
            });

    }

    updateProduct(product) {
        this.httpvar.put(
            'http://localhost:3000/products' + product.id, 
            JSON.stringify(product), 
            this.httpOptions
            )
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
