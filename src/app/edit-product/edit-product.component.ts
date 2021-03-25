import { Router } from '@angular/router';
import { ProductService } from './../adminServices/product.service';
import { Product } from './../product/Product';
import { Component, ElementRef, Input, OnInit, Output, ViewChild, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit ,OnDestroy {

  imageSrc;
  product:Product= new Product(null,"",null,0,"","");
  productOut:Product= new Product(null,"",null,0,"","");
  @ViewChild('warningDiv', {static: true}) warningDiv :ElementRef;

  constructor(private productService:ProductService,private router:Router) {

   }
  ngOnDestroy(): void {
    this.OnDiscard();
  }

  ngOnInit(): void {
    this.product =this.productService.passedProduct;
    if(this.product!=undefined)
    this.imageSrc = this.product.image;
    this.imagePreview = this.imageSrc;
    if(!this.product){
      this.product= new Product(null,"",null,0,"","");
    }
  }


  OnUpdateProduct(title,price,sizes,details){
    if(title!=""&&price!=0&&sizes!=""&&details!=""&&this.imageSrc!=""){
      const formData = new FormData();
      const id = this.product._id;
      // this.productOut = new Product(this.product._id,title,this.imageSrc,price,details,sizes);
      // formData.append("id",id)
      formData.append("title",title);
      formData.append("productImage",this.imageSrc);
      formData.append("price",price);
      formData.append("details",details);
      formData.append("size",sizes);
      this.productService.editProduct(id,formData).subscribe((response)=>{
        if(response){
          console.log(response);
          this.OnDiscard();
          this.router.navigateByUrl('/AdminDashboardComponent/adminProducts')
        }
      },
      (err)=>{
        console.log(err);
      });

    }
    else{
      this.warningDiv.nativeElement.style.display='block';
    }
  }

  OnDiscard(){
    this.product=new Product (null,"",null,0,"","");
    this.imageSrc='../../assets/images/uploadImage.png';
    this.imagePreview ='../../assets/images/uploadImage.png';
  }

  imagePreview;
  OnUpload(event){
    if (event.target.files && event.target.files[0]) {
      this.imageSrc =event.target.files[0];
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = () => this.imagePreview = reader.result;
      this.productOut.image = this.imageSrc;
      reader.readAsDataURL(file);
    }
  }
}
