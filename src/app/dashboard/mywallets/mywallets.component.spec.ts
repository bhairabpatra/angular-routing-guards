import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MywalletsComponent } from './mywallets.component';

describe('MywalletsComponent', () => {
  let component: MywalletsComponent;
  let fixture: ComponentFixture<MywalletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MywalletsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MywalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
