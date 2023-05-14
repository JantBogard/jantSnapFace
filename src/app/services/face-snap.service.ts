import { FaceSnap } from './../models/face-snap.model';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FaceSnapService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Panier de basket',
      description: 'C\'est là que la balle doit passer pour marquer des points',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: 'https://img.freepik.com/photos-gratuite/panier-basket-fond-ciel-bleu_262238-1833.jpg?size=626&ext=jpg&ga=GA1.2.776459075.1653383763',
      location: 'Hopital Général'
    },
    {
      id: 2,
      title: 'Balle de sport',
      description: 'Sur cette image on peut les balles des différent sport de balle',
      createdDate: new Date(),
      snaps: 6,
      imageUrl: 'https://img.freepik.com/photos-gratuite/composition-divers-equipements-sportifs-pour-fitness-jeux_93675-84275.jpg?size=626&ext=jpg&ga=GA1.2.776459075.1653383763',
      location: 'Salle de gym'
    },
    {
      id: 3,
      title: 'Terrain de handball',
      description: '😤 qu\'est ce que je deteste ce sport',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: 'https://img.freepik.com/photos-gratuite/vue-aerienne-du-terrain-football-du-stade-sportif_153977-92.jpg?size=626&ext=jpg&ga=GA1.2.776459075.1653383763'
    }
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (faceSnap) {
      return faceSnap;
    } else {
      throw new Error("FaceSnap not found with id: " + faceSnapId);
    }

  }

  snapFaceSnapsById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getSnapById(faceSnapId);

    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): void {
    const faceSnap: FaceSnap = {
      ...formValue,
      createdDate: new Date(),
      snaps: 0,
      id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
    }

    this.faceSnaps.push(faceSnap);
  }
}
