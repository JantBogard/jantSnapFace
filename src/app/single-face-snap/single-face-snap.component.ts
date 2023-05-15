import { tap } from 'rxjs/operators';
import { FaceSnapService } from './../services/face-snap.service';
import { FaceSnap } from './../models/face-snap.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;
  textButton!: string;

  constructor(private faceSnapService: FaceSnapService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.textButton = "Oh Snap!";
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapService.getSnapById(faceSnapId);
  }

  onAddSnap(faceSnapId: number) {
    if (this.textButton === "Oh Snap!") {
      this.faceSnap$ = this.faceSnapService.snapFaceSnapsById(faceSnapId, 'snap').pipe(
        tap(() => this.textButton = "Oops, un Snap!")
      );
    } else {
      this.faceSnap$ = this.faceSnapService.snapFaceSnapsById(faceSnapId, 'unsnap').pipe(
        tap(() => this.textButton = "Oh Snap!")
      );
    }
  }
}
