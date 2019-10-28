import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/service/bike.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Bike } from 'src/app/interfaces/bike';
import { BikeDetail } from 'src/app/interfaces/bike-detail';

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.css']
})
export class BikeDetailComponent implements OnInit {
  bikeDetail: any;

  constructor(private bikeService: BikeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.listenParams();
  }
  listenParams(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params['id'];
      if (id) {
        // Call the bike detail service by passsing id of the current route
        this.getBikeDetailByID(id);
      }
    });
  }
  getBikeDetailByID(id: string): void {
    this.bikeService.getBikeDetailByID(id).subscribe((response: BikeDetail) => {
      // response data from service and save that response into the bikedetail variable
      if (response && response[0] && response[0].currentBike) {
        this.bikeDetail = response[0].currentBike;
      }
    });
  }
  createBooking(bikeDetail: Bike): void {
    this.bikeService.createBooking(bikeDetail).subscribe((response: Bike) => {
      if (response) {
        alert('booking Confirmed');
      }
    }, (error) => {
      if (error) {
        alert(error.message);
      }
    });
  }
  addToCart(bikeDetail: Bike): void {
    alert("Item added to cart successfully!");
  }

}
