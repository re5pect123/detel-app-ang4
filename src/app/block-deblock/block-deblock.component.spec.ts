import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockDeblockComponent } from './block-deblock.component';

describe('BlockDeblockComponent', () => {
  let component: BlockDeblockComponent;
  let fixture: ComponentFixture<BlockDeblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockDeblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockDeblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
