import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListNewspapersComponent } from './page-list-newspapers.component';

describe('PageListNewspapersComponent', () => {
  let component: PageListNewspapersComponent;
  let fixture: ComponentFixture<PageListNewspapersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListNewspapersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListNewspapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
