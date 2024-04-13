import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionbookComponent } from './selectionbook.component';

describe('SelectionbookComponent', () => {
  let component: SelectionbookComponent;
  let fixture: ComponentFixture<SelectionbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectionbookComponent]
    });
    fixture = TestBed.createComponent(SelectionbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
