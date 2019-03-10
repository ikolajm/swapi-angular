import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'SWAPI App';
  _dropdown = '';
  _searchField = '';
  _data = {};
  baseUrl = 'https://swapi.co/api'

  constructor(private http: HttpClient) { }

  onType(dropdown, searchField) {
    this._dropdown = dropdown;
    this._searchField = searchField;
  }
  
  onSubmit() {
    return (this.http.get(`${this.baseUrl}/${this._dropdown}/?search=${this._searchField}`))
      .subscribe(data => {
        this._data = data;
      })
  }


}
  


  
  
