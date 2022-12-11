import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDisplayBasketComponent } from './page-display-basket.component';

describe('PageDisplayBasketComponent', () => {
  let component: PageDisplayBasketComponent;
  let fixture: ComponentFixture<PageDisplayBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDisplayBasketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDisplayBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
