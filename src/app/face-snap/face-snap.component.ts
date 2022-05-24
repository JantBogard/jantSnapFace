import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  snapped!: boolean;
  textButton!: string;

  ngOnInit(): void {
    this.title = "Lucy";
    this.description = "Is my best friend for a long time !";
    this.createdDate = new Date;
    this.snaps = 6;
    this.imageUrl = "https://via.placeholder.com/300x200";
    this.snapped = false;
    this.textButton = "Oh Snap!";
  }

  onAddSnap () {
    if (!this.snapped) {
      this.snaps++;
      this.textButton = "Oops, un Snap!";
      this.snapped = !this.snapped;
    } else {
      this.snaps--;
      this.textButton = "Oh Snap!";
      this.snapped = !this.snapped;
    }
  }
}
