import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'SWAPI App';
  _data = {};
  baseUrl = 'https://swapi.co/api'

  constructor(private http: HttpClient) { }
  
  onSubmit(dropdown, search) {
    return (this.http.get(`${this.baseUrl}/${dropdown}/?search=${search}`))
      .subscribe(data => {
        this._data = data;
      })
  }


}
  


  
  
