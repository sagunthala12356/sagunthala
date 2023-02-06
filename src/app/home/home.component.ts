import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';
import SwiperCore, { Pagination } from "swiper/core";
SwiperCore.use([Pagination]);
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  config :SwiperOptions={};
  constructor(private router:Router,
    private toast: ToastrService){}
  ngOnInit(){
      // var swiper = new swiper('.swiper-container', {
        this.config = {
          pagination: { 
            el: '.swiper-pagination', 
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          spaceBetween: 30
        }; 
  }
  slideData = [
    {
      id: 1,
      name: "Santhose",
      address:"27 Yrs 5ft 5 in MBBS Doctor,Hindu chennai,tamilnadu",
      img:"../../assets/images1.jpg"
    }, {
      id: 2,
      name: "Ravi",
      address:"28 Yrs 5ft 5 in Software Engineer,Hindu chennai,tamilnadu",
      img:"../../assets/images2.jpg"
    }, {
      id: 3,
      name: "Raju",
      address:"29 Yrs 5.5ft 5 in Professor,Hindu chennai,tamilnadu",
      img:"../../assets/images3.jpg"
    },
    {
      id: 4,
      name: "Priya",
      address:"25 Yrs 5ft 5 in MBBS Doctor,Hindu chennai,tamilnadu",
      img:"../../assets/images4.jpg"
    },
    {
      id: 5,
      name: "Madu",
      address:"24 Yrs 5ft 5 in MBBS Doctor,Hindu chennai,tamilnadu",
      img:"../../assets/images5.jpg"
    }]
    getRemove(val:any,i:any){    
      if (i >=0) {
        this.slideData.splice(i, 1);
        console.log(this.slideData);   
      } 
      this.toast.success("success","Successfully");
      alert("successfully removed");
    }
    goto(){
      this.router.navigate(['/gesture']);
    }
    detail(val:any){
      this.router.navigate(['/detail'],{queryParams:{id:val}})
    }
}
