import { Component, OnInit } from '@angular/core';
import { profileData } from 'src/app/services/profile.service';
import{Profile} from './profile'
@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  profile:Profile;
  constructor(private profilData :profileData) { }

  ngOnInit(): void {
    this.profile ={_id:"",image:"",username:"",email:"",gender:""};
    this.profilData.getAdminData().subscribe(
      (respond)=>{
        console.log(respond)
        this.profile=respond["admin"]
      },
      (error)=>{
        console.log(error)
      });
  }

}
