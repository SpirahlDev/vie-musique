const musicRoot="../../assets/music";
export interface MusicInterface {
    id: number;
    title: string;
    artiste: string;
    description: string;
    fileUri:string;
    duration:string;
}

export class Music implements MusicInterface {
    id: number;
    title: string;
    artiste: string;
    description: string;
    fileUri: string;
    duration:string;

    constructor(id: number, title: string, artiste: string, description: string, fileUri: string,duration :string) {
        this.id = id;
        this.title = title;
        this.artiste = artiste;
        this.description = description;
        this.fileUri = fileUri;
        this.duration=duration;
    }
}

  export const musicList:Music[]  = [
    {
        id: 1,
        title: "Pyramide",
        artiste: "Damso & Werenoi",
        description: "Damso et Werenoi en feat",
        fileUri:`${musicRoot}/Pyramide Damso ft Werenoi.m4a`,
        duration:"3:27"
    },
    {
        id: 2,
        title:"Wolof" ,
        artiste: "Damso",
        description: "Extrait de l'enregistrement du futur titre \"Wolof\" de Damso",
        fileUri:`${musicRoot}/Damso - Wolof.m4a`,
        duration:"2:21"
    },
    {
        id: 3,
        title: "Hiroshima",
        artiste:"Lous And The Yakuza" ,
        description:"Musique de la magnifique chanteuse Belge Lous" ,
        fileUri:`${musicRoot}/Lous Hiroshima.m4a`,
        duration:"2:47"
    }
  ];
  
  