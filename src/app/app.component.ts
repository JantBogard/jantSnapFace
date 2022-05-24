import { FaceSnap } from './models/face-snap.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public faceSnaps!: FaceSnap[];
  public mySnap!: FaceSnap;
  public myOtherSnap!: FaceSnap;
  public myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.faceSnaps = [
      {
        title: 'Panier de basket',
        description: 'C\'est là que la balle doit passer pour marquer des points',
        createdDate: new Date(),
        snaps: 0,
        imageUrl: 'https://img.freepik.com/photos-gratuite/panier-basket-fond-ciel-bleu_262238-1833.jpg?size=626&ext=jpg&ga=GA1.2.776459075.1653383763',
        location: 'Hopital Général'
      },
      {
        title: 'Balle de sport',
        description: 'Sur cette image on peut les balles des différent sport de balle',
        createdDate: new Date(),
        snaps: 6,
        imageUrl: 'https://img.freepik.com/photos-gratuite/composition-divers-equipements-sportifs-pour-fitness-jeux_93675-84275.jpg?size=626&ext=jpg&ga=GA1.2.776459075.1653383763',
        location: 'Salle de gym'
      },
      {
        title: 'Terrain de handball',
        description: '😤 qu\'est ce que je deteste ce sport',
        createdDate: new Date(),
        snaps: 0,
        imageUrl: 'https://img.freepik.com/photos-gratuite/vue-aerienne-du-terrain-football-du-stade-sportif_153977-92.jpg?size=626&ext=jpg&ga=GA1.2.776459075.1653383763'
      }
    ];
  }
}
