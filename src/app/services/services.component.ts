import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  showFullPuppyPackage = false;
  showFullLooseLead = false;
  showFull121 = false;
  showFullCatSmallVisit = false;
  showFullPuppyVisit = false;
  showFullDogSitting = false;

  constructor() {}

  ngOnInit() {
  }

  toggleShowMoreInfoPuppyPackage(): void {
    if (this.showFullPuppyPackage) {
      this.showFullPuppyPackage = false;
    } else {
      this.showFullPuppyPackage = true;
    }
  }

  toggleShowMoreInfoLooseLead(): void {
    if (this.showFullLooseLead) {
      this.showFullLooseLead = false;
    } else {
      this.showFullLooseLead = true;
    }
  }

  toggleShowMoreInfo121(): void {
    if (this.showFull121) {
      this.showFull121 = false;
    } else {
      this.showFull121 = true;
    }
  }

  toggleShowMoreInfoCatSmallVisit(): void {
    if (this.showFullCatSmallVisit) {
      this.showFullCatSmallVisit = false;
    } else {
      this.showFullCatSmallVisit = true;
    }
  }

  toggleShowMoreInfoPuppyVisit(): void {
    if (this.showFullPuppyVisit) {
      this.showFullPuppyVisit = false;
    } else {
      this.showFullPuppyVisit = true;
    }
  }

  toggleShowMoreInfoDogSitting(): void {
    if (this.showFullDogSitting) {
      this.showFullDogSitting = false;
    } else {
      this.showFullDogSitting = true;
    }
  }
}
