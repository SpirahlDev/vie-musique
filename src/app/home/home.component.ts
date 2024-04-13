import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { MusicListComponent } from "../music-list/music-list.component";
import { SeekBarComponent } from "../seek-bar/seek-bar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavbarComponent, MusicListComponent, SeekBarComponent]
})

export class HomeComponent {

}
