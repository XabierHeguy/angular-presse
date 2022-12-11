import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditNewspaperComponent } from './page-edit-newspaper.component';

describe('PageEditNewspaperComponent', () => {
  let component: PageEditNewspaperComponent;
  let fixture: ComponentFixture<PageEditNewspaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditNewspaperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEditNewspaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
