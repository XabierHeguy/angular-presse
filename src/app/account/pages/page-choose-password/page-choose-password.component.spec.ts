import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChoosePasswordComponent } from './page-choose-password.component';

describe('PageChoosePasswordComponent', () => {
  let component: PageChoosePasswordComponent;
  let fixture: ComponentFixture<PageChoosePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageChoosePasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageChoosePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
