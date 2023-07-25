import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(private http: HttpClient) { }

  searchWeather(city: string): Observable<any[]> {
    return this.http.get<any[]>(`/api/location/search/?query=${city}`);
  }

  // Function to get weather details by the "woeid" (Where On Earth ID)
  getWeatherDetails(woeid: number): Observable<any> {
    return this.http.get<any>(`/api/location/${woeid}/`);
  }
}
