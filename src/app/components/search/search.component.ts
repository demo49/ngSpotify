import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import { RouterModule, Routes } from '@angular/router';
import'rxjs/add/operator/map';
import {Artist} from '../../../Artist';

@Component({
  moduleId:module.id,
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
      
  searchStr :string;
  searchRes:Artist[];
 

  constructor(private _SpotifyService:SpotifyService) { }

   searchMusic(){
    this._SpotifyService.searchMusic(this.searchStr)
    .subscribe(res =>{
      this.searchRes = res.artists.items;
    })
  }



  ngOnInit() {
  }

}
