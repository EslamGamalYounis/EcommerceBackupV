import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  actiondone:boolean
  orders
  constructor(private orderService :OrdersService) { }
  ngOnInit(): void {
    //call service to get all orders and equal respont to orders lis
    const username =localStorage.getItem("username");
    this.orderService.getOrders(username).subscribe(
      (respond)=>{
        console.log(respond)
       this.orders=respond["orders"];
      },
    (error)=>{
      console.log(error)
    });
  }

  delete(id){
    this.orderService.deleteOrder(id).subscribe(
      (respond)=>{
        //this.orderService=respond["message"];
        console.log(respond);
        this.ngOnInit();
      },
      (error)=>{
        console.log(error)
      }
    )
  }
}

