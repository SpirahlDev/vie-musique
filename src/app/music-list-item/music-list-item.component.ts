import { Component, Input } from '@angular/core';
import { Music } from '../model/music';
import { MusicPlayer } from '../helpers/MusicPlayer';

@Component({
  selector: 'app-music-list-item',
  standalone: true,
  imports: [],
  templateUrl: './music-list-item.component.html',
  styleUrl: './music-list-item.component.css'
})

export class MusicListItemComponent {
  @Input() song!:Music;

  static audio: HTMLAudioElement = new Audio();

  playSong(song:Music):void{
    const songElement=document.getElementById(MusicListItemComponent.getDomIdOf(song));

    if(songElement){
      this.showFeedback(songElement as HTMLElement);
      /**
       * Etant donné que la methode playsong peut être appelé depuis un endroit autre que le
       * template HTML, MusicPlayer joue soit le song associé au MusicListItemComponent depuis le template, 
       * soit song pris en argument
       */
      MusicPlayer.play(this.song || song); 
    }
  }

  showFeedback(element:HTMLElement):void{
    const oldPlayingElement=document.querySelector(".isPlaying");
    if(oldPlayingElement){
      oldPlayingElement.classList.remove("isPlaying");
    }

    element.classList.add("isPlaying");
  }

  static getDomIdOf(song:Music):string{
    return "song-"+song.id;
  }
}
