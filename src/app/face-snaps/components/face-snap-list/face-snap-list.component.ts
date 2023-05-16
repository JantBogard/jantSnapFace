import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FaceSnap } from 'src/app/core/models/face-snap.model';
import { FaceSnapService } from 'src/app/core/services/face-snap.service';

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
