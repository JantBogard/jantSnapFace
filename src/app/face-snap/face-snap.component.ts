import { FaceSnap } from './../models/face-snap.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  textButton!: string;

  ngOnInit(): void {
    this.textButton = "Oh Snap!";
  }

  onAddSnap () {
    if (this.textButton === "Oh Snap!") {
      this.faceSnap.snaps++;
      this.textButton = "Oops, un Snap!";
    } else {
      this.faceSnap.snaps--;
      this.textButton = "Oh Snap!";
    }
  }
}
