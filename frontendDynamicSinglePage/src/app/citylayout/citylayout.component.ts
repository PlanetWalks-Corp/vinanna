import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {CityinfoService} from '../cityinfo.service';
import { ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {City} from '../classes';
import {Place} from '../classes';

@Component({
  selector: 'app-citylayout',
  templateUrl: './citylayout.component.html',
  styleUrls: ['./citylayout.component.css']
})
export class CitylayoutComponent implements OnInit {
  @Input('recCityId') id: number=-1;
  @Output() MainMenu:EventEmitter<boolean>= new EventEmitter()
  citi: any=-1;
  place: any=-1;
  person: any=-1;
  foodPoint :Place[]=[];
  placesToVisit :Place[]=[];
   constructor(private cityinfo: CityinfoService, private route: ActivatedRoute, private router: Router) {
     this.route.params.subscribe( params => {this.id = params["id"]});
    }
  history = this.citi.history;//"The city of Jaipur was founded by King of Amer, Maharaja Sawai Jai Singh II on November 18, 1727.";
  image_source = 'https://res.cloudinary.com/ksush/image/upload/v1610801552/deviTalab_dzxpmf.jpg';
  
  FamousPersonalities = this.citi.personList;
  ngOnInit(): void {
  this.cityinfo.getCityInfo(this.id).subscribe((data: any) => {
        this.citi = data;
        this.foodPoint=this.citi.placeList && this.citi.placeList.filter((place:any)=>place.placeType==="food");
        this.placesToVisit=this.citi.placeList && this.citi.placeList.filter((place:any)=>place.placeType!=="food");
  })
  }


}
