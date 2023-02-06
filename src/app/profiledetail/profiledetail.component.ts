import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwiperOptions } from 'swiper';
import SwiperCore, { Pagination } from "swiper/core";
SwiperCore.use([Pagination]);
import {Router} from '@angular/router'

@Component({
  selector: 'app-profiledetail',
  templateUrl: './profiledetail.component.html',
  styleUrls: ['./profiledetail.component.css']
})
export class ProfiledetailComponent {
  config :SwiperOptions={};
  id:any;
  detailaarr:any=[];
   slideIndex:any = 1;
   slideData = [
    {
      id: 1,
      name: "Santhose",
      address:"27 Yrs 5ft 5 in MBBS Doctor,Hindu chennai,tamilnadu",
      img:['https://www.w3schools.com/howto/img_nature_wide.jpg','https://www.w3schools.com/howto/img_snow_wide.jpg',
    ]
    }, {
      id: 2,
      name: "Ravi",
      address:"28 Yrs 5ft 5 in Software Engineer,Hindu chennai,tamilnadu",
      img:['../../assets/images2.jpg','../../assets/images1.jpg','../../assets/images3.jpg',
    ]    }, {
      id: 3,
      name: "Raju",
      address:"29 Yrs 5.5ft 5 in Professor,Hindu chennai,tamilnadu",
      img:['../../assets/images3.jpg','../../assets/images1.jpg','../../assets/images2.jpg',
    ]
    },
    {
      id: 4,
      name: "Priya",
      address:"25 Yrs 5ft 5 in MBBS Doctor,Hindu chennai,tamilnadu",
      img:['../../assets/images4.jpg','../../assets/images5.jpg'
    ]
    },
    {
      id: 5,
      name: "Madu",
      address:"24 Yrs 5ft 5 in MBBS Doctor,Hindu chennai,tamilnadu",
      img:['../../assets/images5.jpg','../../assets/images4.jpg'
    ]
    }]

  constructor(private route:ActivatedRoute,private router:Router){}
  ngOnInit(){
    this.route.queryParams.subscribe((res:any)=>{
      console.log(res);
      this.id=res?.id;
      
      this.detailaarr=this.slideData.filter((ele:any)=>ele?.id==this.id);
      console.log(this.detailaarr);
    })
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
        this.showSlides(this.slideIndex);
  }
  
 
  
   plusSlides(n:any) {
    this.showSlides(this.slideIndex += n);
  }
  
   currentSlide(n:any) {
    this.showSlides(this.slideIndex = n);
  }
  
   showSlides(n:any) {
    let i;
    let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    let dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;
    if (n > slides.length) {this.slideIndex = 1}    
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].style.display = "block";  
    // dots[this.slideIndex-1].className += " active";

  } 
  back(){
    this.router.navigate(['/home']);
  }
}
