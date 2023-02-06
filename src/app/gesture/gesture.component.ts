import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';
import SwiperCore, { Pagination } from "swiper/core";
SwiperCore.use([Pagination]);
import {Router} from '@angular/router'

@Component({
  selector: 'app-gesture',
  templateUrl: './gesture.component.html',
  styleUrls: ['./gesture.component.css']
})
export class GestureComponent {
  config :SwiperOptions={}
  constructor(private router:Router){}
  ngOnInit(){
   
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
      alert("successfully removed");
    }
    back(){
      this.router.navigate(['/home']);
    }
}
