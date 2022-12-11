import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEnterPersonalDataComponent } from './page-enter-personal-data.component';

describe('PageEnterPersonalDataComponent', () => {
  let component: PageEnterPersonalDataComponent;
  let fixture: ComponentFixture<PageEnterPersonalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEnterPersonalDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEnterPersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
