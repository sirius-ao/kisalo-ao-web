import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxSkeletonLoaderComponent } from "ngx-skeleton-loader";

@Component({
  selector: 'app-card-service',
  imports: [RouterLink, NgxSkeletonLoaderComponent, CommonModule],
  templateUrl: './card-service.html',
  styleUrl: './card-service.scss'
})
export class CardService {

  isLoaded = true;

  constructor(private cdRef: ChangeDetectorRef) {
    setTimeout(() => {
      this.isLoaded = false;
      this.cdRef.detectChanges();  

    }, 2000);
  }
}
