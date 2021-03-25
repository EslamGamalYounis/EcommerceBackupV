import {Order} from '../order/order';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  actiondone:boolean
  orders;
  constructor(private orderService :OrdersService) { }
  ngOnInit(): void {
    //call service to get all orders and equal respont to orders lis
    this.orderService.getAllOrders().subscribe(
      (respond)=>{
        console.log(respond)
        this.orders=respond["orders"];
      },
    (error)=>{
      console.log(error)
    });
  }



  change(id,value){
    if(value){
      console.log(value);

      this.orderService.changeStates(id,value).subscribe((res)=>{
        let x =res["success"];
        if(x){
          console.log(x);
          this.ngOnInit();
        }
      }
      ,(error)=>{
        console.log(error);

      });
    }
  }
}
