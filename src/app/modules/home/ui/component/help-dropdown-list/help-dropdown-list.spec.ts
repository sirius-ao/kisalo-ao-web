import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDropdownList } from './help-dropdown-list';

describe('HelpDropdownList', () => {
  let component: HelpDropdownList;
  let fixture: ComponentFixture<HelpDropdownList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpDropdownList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpDropdownList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
