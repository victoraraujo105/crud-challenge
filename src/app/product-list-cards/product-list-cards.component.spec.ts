import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListCardsComponent } from './product-list-cards.component';

describe('ProductListCardsComponent', () => {
  let component: ProductListCardsComponent;
  let fixture: ComponentFixture<ProductListCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
