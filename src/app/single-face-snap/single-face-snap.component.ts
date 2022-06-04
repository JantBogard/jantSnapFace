import { FaceSnapService } from './../services/face-snap.service';
import { FaceSnap } from './../models/face-snap.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  textButton!: string;

  constructor(private faceSnapService: FaceSnapService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.textButton = "Oh Snap!";
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getSnapById(faceSnapId);
  }

  onAddSnap () {
    if (this.textButton === "Oh Snap!") {
      this.faceSnapService.snapFaceSnapsById(this.faceSnap.id, 'snap');
      this.textButton = "Oops, un Snap!";
    } else {
      this.faceSnapService.snapFaceSnapsById(this.faceSnap.id, 'unsnap');
      this.textButton = "Oh Snap!";
    }
  }
}
