import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardServiceSkeleton } from './card-service-skeleton';

describe('CardServiceSkeleton', () => {
  let component: CardServiceSkeleton;
  let fixture: ComponentFixture<CardServiceSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardServiceSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardServiceSkeleton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
