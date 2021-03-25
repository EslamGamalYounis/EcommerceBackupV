import { Product } from 'src/app/product/Product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  myObservable:Observable<Array<Product>> ;
  //private baseUrl:string= "http://localhost:3000/api/product";
  private baseUrl:string= "https://ecommerceapp-sportswear.herokuapp.com/api/product";
  passedProduct:Product;

  constructor(private httpClient:HttpClient) {

   }

  //from out
  // getTransferIp() {
  //   let header = new HttpHeaders().set(
  //     "Authorization",
  //      localStorage.getItem("token")
  //   );

    //return this.http.get("https://ecommerceapp-sportswear.herokuapp.com/api/user/profile", {headers:header});
  // }


  //token:token,message:"login-successfully",userName,image
  getAllProducts(){
    return this.httpClient.get<Product[]>(this.baseUrl+"/allproducts");
  }

  addProduct(product){
    //,{headers:header}
    return this.httpClient.post(this.baseUrl+"/add",product);
  }

  editProduct(id,product){
    //,{headers:header}
    console.log(id,product);

    return this.httpClient.patch(this.baseUrl+"/edit/"+id,product);
  }

  deleteProduct(title){
    console.log(title);

    return this.httpClient.delete(this.baseUrl+"/delete/"+title);
  }

  passProductToEdit(_product){
    this.passedProduct = _product;
  }

}
