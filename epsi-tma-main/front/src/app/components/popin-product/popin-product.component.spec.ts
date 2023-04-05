import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopinProductComponent } from './popin-product.component';

describe('PopinProductComponent', () => {
  let component: PopinProductComponent;
  let fixture: ComponentFixture<PopinProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopinProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopinProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
