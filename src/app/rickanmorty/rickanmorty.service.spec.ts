import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { RickanmortyService } from './rickanmorty.service';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { RickanmortyPage } from './rickanmorty.page';
import { of, throwError } from 'rxjs';

describe('RickanmortyService', () => {
  let service: RickanmortyService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RickanmortyPage],
      imports: [IonicModule.forRoot(), HttpClientModule],
      providers: [RickanmortyService]
    });
    service = TestBed.inject(RickanmortyService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deberia estar el metodo obtener datos creado', () => {
    expect(service.obtenerDatos).toBeDefined();
  });

  it('deberia hacer un get request cuando se llame a obtenerDatos', fakeAsync(() => {
    const characters = [{id:1, name: 'Rick'}, {id:2, name: 'Morty'}];

    spyOn(httpClient, 'get').and.returnValue(of(characters));

    let result: any;
    service.obtenerDatos().subscribe(data => {
      result = data;
    });

    tick();  //simula espera de la respuesta *aprendi algo nuevo*


    expect(httpClient.get).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character/');
    expect(result).toEqual(characters);
  }));


  it('deberia manejar una respuesta vacia cuando se llama el metodo obtener datos', fakeAsync(() => {
    spyOn(httpClient,  'get').and.returnValue(of(null));

    let result:any;
    service.obtenerDatos().subscribe(data => {
      result = data;
    });

    tick();

    expect(httpClient.get).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character/');
    expect(result).toBeNull();
  }));


});
