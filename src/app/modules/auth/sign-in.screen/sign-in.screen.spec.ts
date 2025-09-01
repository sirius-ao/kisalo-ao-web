import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInScreen } from './sign-in.screen';

describe('SignInScreen', () => {
  let component: SignInScreen;
  let fixture: ComponentFixture<SignInScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
