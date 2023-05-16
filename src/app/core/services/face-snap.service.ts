import { map, switchMap, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FaceSnap } from '../models/face-snap.model';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class FaceSnapService {

  constructor(private http: HttpClient) { };

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
  }

  snapFaceSnapsById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
    return this.getSnapById(faceSnapId).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
      })),
      switchMap(updateFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${updateFaceSnap.id}`, updateFaceSnap))
    );
  }

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
    return this.getAllFaceSnaps().pipe(
      map(faceSnaps => [...faceSnaps].sort((a, b) => a.id - b.id)),
      map(sortedFaceSnaps => ({
        ...formValue,
        createdDate: new Date(),
        snaps: 0,
        id: sortedFaceSnaps[sortedFaceSnaps.length - 1].id + 1
      })),
      switchMap(faceSnap => this.http.post<FaceSnap>('http://localhost:3000/facesnaps', faceSnap))
    );
  }
}
