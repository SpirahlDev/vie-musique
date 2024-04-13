import { Component } from '@angular/core';
import { MusicListItemComponent } from "../music-list-item/music-list-item.component";
import { Music, musicList } from '../model/music';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-music-list',
    standalone: true,
    templateUrl: './music-list.component.html',
    styleUrl: './music-list.component.css',
    imports: [MusicListItemComponent,CommonModule]
})

export class MusicListComponent {
  musicList=[...musicList];

  setMusicList(musicList:Music[]){
    this.musicList=musicList;
  }

}
