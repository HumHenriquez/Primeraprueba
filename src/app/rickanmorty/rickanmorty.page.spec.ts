import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RickanmortyPage } from './rickanmorty.page';

describe('RickanmortyPage', () => {
  let component: RickanmortyPage;
  let fixture: ComponentFixture<RickanmortyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RickanmortyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
