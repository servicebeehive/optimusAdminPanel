import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteddatatableComponent } from './posteddatatable.component';

describe('PosteddatatableComponent', () => {
  let component: PosteddatatableComponent;
  let fixture: ComponentFixture<PosteddatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosteddatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosteddatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
