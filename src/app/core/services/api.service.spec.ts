import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ApiService } from './api.service';
import { MaterialIvi } from '../models/interfaces';

const materialsIvi: MaterialIvi[] = [
  {
    "grado": "Quinto de Básica",
    "unidades": [
      {
        "idmaterialivi": 1,
        "resumenmaterialivi": "Exploremos num",
        "descripciongradoivi": "Quinto de Básica",
        "unidadmaterialivi": "Unidad 1",
        "imagenmaterialivi": "https://i.blogs.es/c140f1/3446535-supermarioparty-review-thumbnologo/450_1000.jpeg",
        "urlmaterialivi": "http://kickstarter.com/quis/libero/nullam/sit/amet.xml\t",
        "temas": [
          {
            "tema": "tablas 3"
          },
          {
            "tema": "tablas 4"
          },
          {
            "tema": "tablas 5"
          }
        ]
      },
      {
        "idmaterialivi": 2,
        "resumenmaterialivi": "Explora 2",
        "descripciongradoivi": "Quinto de Básica",
        "unidadmaterialivi": "unidad 2",
        "imagenmaterialivi": "https://i.blogs.es/c140f1/3446535-supermarioparty-review-thumbnologo/450_1000.jpeg",
        "urlmaterialivi": "http://kickstarter.com/quis/libero/nullam/sit/amet.xml\t",
        "temas": [
          {
            "tema": "teablas6"
          },
          {
            "tema": "teablas 7"
          },
          {
            "tema": "tablas 8"
          }
        ]
      }
    ]
  },
  {
    "grado": "Sexto de Básica",
    "unidades": [
      {
        "idmaterialivi": 3,
        "resumenmaterialivi": "Explora 6to",
        "descripciongradoivi": "Sexto de Básica",
        "unidadmaterialivi": "unidad 1",
        "imagenmaterialivi": "https://i.blogs.es/c140f1/3446535-supermarioparty-review-thumbnologo/450_1000.jpeg",
        "urlmaterialivi": "http://kickstarter.com/quis/libero/nullam/sit/amet.xml\t",
        "temas": [
          {
            "tema": "tablas 9"
          },
          {
            "tema": "tablas10"
          },
          {
            "tema": "tablas11"
          }
        ]
      }
    ]
  }
]

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [ ApiService ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  beforeEach(() => {
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);

    spyOn(service, 'getMaterialIvi').and.callFake( () => {
      return of(materialsIvi)
    });
  });

  afterEach( () => {
    httpMock.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

















  it('should getMaterialIvi, return an array of the material of ivi', () => {
    const idClase = '1'
    service.getMaterialIvi(idClase).subscribe( (value: MaterialIvi[]) => {
      expect(value).toEqual(materialsIvi)
    })
  });

  xit('should getMaterialIvi, get metod works corretly', () => {
    const url = 'http://localhost:3000/book'

    const req = httpMock.expectOne(url)

  });



});

