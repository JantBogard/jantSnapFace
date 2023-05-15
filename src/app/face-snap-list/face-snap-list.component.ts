import { FaceSnapService } from './../services/face-snap.service';
import { FaceSnap } from './../models/face-snap.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  public faceSnaps!: FaceSnap[];
  public faceSnaps$!: Observable<FaceSnap[]>;

  constructor(private faceSnapService: FaceSnapService) { }

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapService.getAllFaceSnaps();
  }

}
