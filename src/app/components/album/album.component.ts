import { Component, OnInit } from '@angular/core';
import {Artist} from '../../../Artist';
import {Album} from '../../../Album';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';
import { HttpModule  } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

@Component({
  moduleId:module.id,
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  id:string;
    album:Album[];
    
    constructor(
        private _spotifyService:SpotifyService,
        private _route:ActivatedRoute){
        
    }
    
     ngOnInit(){
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService.getAlbum(id)
                    .subscribe(album => {
                        this.album = album;
                    })                               
            })
}

}
