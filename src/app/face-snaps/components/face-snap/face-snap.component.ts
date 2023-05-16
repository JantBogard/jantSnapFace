import { Router } from '@angular/router';
import { FaceSnapService } from '../../../core/services/face-snap.service';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  textButton!: string;

  constructor(private faceSnapService: FaceSnapService,
    private router: Router) { }

  ngOnInit(): void {
    this.textButton = "Oh Snap!";
  }

  onAddSnap() {
    if (this.textButton === "Oh Snap!") {
      this.faceSnapService.snapFaceSnapsById(this.faceSnap.id, 'snap');
      this.textButton = "Oops, un Snap!";
    } else {
      this.faceSnapService.snapFaceSnapsById(this.faceSnap.id, 'unsnap');
      this.textButton = "Oh Snap!";
    }
  }

  onViewSnap() {
    this.router.navigateByUrl(`/facesnaps/${this.faceSnap.id}`);
  }
}
