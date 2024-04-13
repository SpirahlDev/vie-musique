import { Music, musicList } from "../model/music";
import { MusicListItemComponent } from "../music-list-item/music-list-item.component";
import { MusicListComponent } from "../music-list/music-list.component";
import { SeekBarComponent } from "../seek-bar/seek-bar.component";

export class MusicPlayer{
    static musicList=[...musicList];

    static audio : HTMLAudioElement=new Audio();
    static music:Music;
    static PAUSE_STATE="PAUSE";
    static PLAYING_STATE="PLAYING";

    static play(song :Music):void{
        MusicPlayer.music=song;

        MusicPlayer.audio.pause();
        MusicPlayer.audio.src=song.fileUri;
        MusicPlayer.audio.play();

        MusicPlayer.audio.addEventListener("ended",MusicPlayer.showEndFeedback);
        MusicPlayer.audio.addEventListener("pause",()=>{
            SeekBarComponent.updateSeekUiControl(this.PAUSE_STATE);
        });

        SeekBarComponent.updateSeekUiControl(this.PLAYING_STATE);
    }

    static pause():void{
        MusicPlayer.audio.pause();
    }

    static resume():void{
        if(MusicPlayer.audio.src!=""){
            MusicPlayer.audio.play();
            SeekBarComponent.updateSeekUiControl(this.PLAYING_STATE);
        }else{
            const randomSong=MusicPlayer.musicList.sort(()=>Math.random()-0.5)[0];
            const musicItem=new MusicListItemComponent();
            musicItem.playSong(randomSong);
        }
    }

    static isSongPlaying():boolean{
        return MusicPlayer.audio.src!="" && !MusicPlayer.audio.paused;
    }

    static showEndFeedback(){
        const musicItemElement=document.getElementById(MusicListItemComponent.getDomIdOf(MusicPlayer.music));
        musicItemElement?.classList.remove("isPlaying");
    }

    static suffleSongList():void{
    }
}