import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddNewspaperComponent } from './page-add-newspaper.component';

describe('PageAddNewspaperComponent', () => {
  let component: PageAddNewspaperComponent;
  let fixture: ComponentFixture<PageAddNewspaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddNewspaperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddNewspaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
