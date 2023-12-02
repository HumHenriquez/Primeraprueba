import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RickanmortyPage } from './rickanmorty.page';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

describe('RickanmortyPage', () => {
  let component: RickanmortyPage;
  let fixture: ComponentFixture<RickanmortyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RickanmortyPage],
      imports: [IonicModule.forRoot(), HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RickanmortyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
