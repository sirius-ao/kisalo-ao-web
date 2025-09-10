import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader'

@Component({
  selector: 'app-card-service-skeleton',
  imports: [NgxSkeletonLoaderModule, CommonModule],
  templateUrl: './card-service-skeleton.html',
  styleUrl: './card-service-skeleton.scss'
})
export class CardServiceSkeleton {

  isLoaded = signal(false);

  constructor() {
    setTimeout(() => {
      this.isLoaded.set(true);
    }, 3000);
  }
}
