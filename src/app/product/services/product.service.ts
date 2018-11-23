import { Injectable } from '@angular/core';

//import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorHandlerService } from './../../_shared/error-handler.service';


@Injectable()
export class ProductService {

    products: any = [];
    public errorMessage: string = '';
    productUrl :string= 'http://localhost:3000/products';

    constructor(
        private httpvar: HttpClient,
        private errorHandler: ErrorHandlerService
    ) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'my-auth-token'
        })
    };

    getProducts() {

        this.httpvar.get(this.productUrl)
        .subscribe((result) => {
            this.products = result;
            console.log(this.products);
        },
            (error) => {
                this.errorHandler.handleError(error);
                this.errorMessage = this.errorHandler.errorMessage;
            }
        )

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
            this.productUrl,
            JSON.stringify(product),
            this.httpOptions
        )
        .subscribe(
            (result: Response) => {
                console.log('res', result);
                this.products.push(result);
            },
            (error) => {
                this.errorHandler.handleError(error);
                this.errorMessage = this.errorHandler.errorMessage;
            }
        );

    }

    updateProduct(product) {
        this.httpvar.put(
            this.productUrl + product.id,
            JSON.stringify(product),
            this.httpOptions
        )
        .subscribe(
            (result: Response) => {
                console.log("user updated", result);
            },
            (error) => {
                this.errorHandler.handleError(error);
                this.errorMessage = this.errorHandler.errorMessage;
            }
        );

    }


    DeleteProduct(user) {
        return this.httpvar.delete(this.productUrl + user.id)
            .subscribe(
            (res) => {
                console.log('user deleted', res);
                let index = this.products.indexOf(user);
                this.products.splice(index, 1);
            },
            (error) => {
                this.errorHandler.handleError(error);
                this.errorMessage = this.errorHandler.errorMessage;
            }
            );
    }

}
