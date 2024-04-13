import { Component } from '@angular/core';
import { MusicPlayer } from '../helpers/MusicPlayer';

@Component({
  selector: 'app-seek-bar',
  standalone: true,
  imports: [],
  templateUrl: './seek-bar.component.html',
  styleUrl: './seek-bar.component.css'
})

export class SeekBarComponent {

  static pauseBtn:HTMLElement|null;
  static playBtn:HTMLElement|null;

  static updateSeekUiControl(state:string):void{
    if(state===MusicPlayer.PLAYING_STATE){
      this.pauseBtn?.classList.remove("not-visible");
      this.playBtn?.classList.add("not-visible");
    }else if(state===MusicPlayer.PAUSE_STATE){
      this.pauseBtn?.classList.add("not-visible");
      this.playBtn?.classList.remove("not-visible");
    }
  }

  ngOnInit(){
    SeekBarComponent.pauseBtn=document.getElementById("pause-btn");
    SeekBarComponent.playBtn=document.getElementById("play-btn");
    this.setListeners();
  }

  setListeners():void{
    SeekBarComponent.pauseBtn?.addEventListener("click",this.togglePlay);
    SeekBarComponent.playBtn?.addEventListener("click",this.togglePlay);
  }

  togglePlay(){
    if(MusicPlayer.isSongPlaying()){
      MusicPlayer.pause();
    }else{
      MusicPlayer.resume();
    }
  }
}
