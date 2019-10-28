import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Bike } from '../interfaces/bike';
import { BikeDetail } from '../interfaces/bike-detail';


@Injectable({
  providedIn: 'root'
})
export class BikeService {
  private bike_API_URL = 'http://139.59.51.176:8089/api/bikes';
  private booking_API_URL = 'http://139.59.51.176:8085/api/bookings';
  constructor(private httpClient: HttpClient) { }

  getBikeDetailByID(id: string): Observable<BikeDetail> {
    const URL = this.bike_API_URL + "/detail?sortBy=bikeName&pageNumber=0&size=20&direction=ASC&fromDate=2019-08-10 04:21:20.201&latitude=40.6655101&toDate=2019-08-10 04:21:20.201&longitude=-73.89188969999998&bikeCategory=test"
      + "&id=" + id;
    return this.httpClient.get<BikeDetail>(URL);

  }
  createBooking(bikeInfo: Bike): Observable<Bike> {
    const URL = this.booking_API_URL + "/create";
    return this.httpClient.post<Bike>(URL, bikeInfo).pipe(catchError(this.handleError));
  }
  handleError(response: HttpErrorResponse) {
    return throwError(response.error);
  }



}
