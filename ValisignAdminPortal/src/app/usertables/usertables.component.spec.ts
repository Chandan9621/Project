import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertablesComponent } from './usertables.component';

describe('UsertablesComponent', () => {
  let component: UsertablesComponent;
  let fixture: ComponentFixture<UsertablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsertablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsertablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
