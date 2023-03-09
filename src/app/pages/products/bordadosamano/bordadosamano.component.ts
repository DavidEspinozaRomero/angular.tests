import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CarouselComponent } from 'src/app/components';
import { Img } from '../../../interfaces/interfaces';
@Component({
  selector: 'app-bordadosamano',
  standalone: true,
  imports: [CommonModule, CarouselComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './bordadosamano.component.html',
  styleUrls: ['./bordadosamano.component.scss'],
})
export class BordadosamanoComponent implements OnInit {
  images: Img[] = [
    {
      url: 'https://unsplash.com/photos/uwRt8jrjZTY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQ0NTQwNjYy&force=true&w=640',
      alt: 'test',
      title: 'test',
    },
    {
      url: 'https://unsplash.com/photos/AFR80W_pT8o/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Njl8fGVtYnJvaWRlcnl8ZW58MHx8fHwxNjQzNDY4NDc3&force=true&w=640',
      alt: 'test',
      title: 'test',
    },
    {
      url: 'https://unsplash.com/photos/DEmEaME-8do/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NDd8fGVtYnJvaWRlcnl8ZW58MHx8fHwxNjQ0NTQwNDk0&force=true&w=640',
      alt: 'test',
      title: 'test',
    },
    {
      url: 'https://unsplash.com/photos/uwRt8jrjZTY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQ0NTQwNjYy&force=true&w=640',
      alt: 'test',
      title: 'test',
    },
    {
      url: 'https://unsplash.com/photos/AFR80W_pT8o/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Njl8fGVtYnJvaWRlcnl8ZW58MHx8fHwxNjQzNDY4NDc3&force=true&w=640',
      alt: 'test',
      title: 'test',
    },
    {
      url: 'https://unsplash.com/photos/DEmEaME-8do/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NDd8fGVtYnJvaWRlcnl8ZW58MHx8fHwxNjQ0NTQwNDk0&force=true&w=640',
      alt: 'test',
      title: 'test',
    },
    {
      url: 'https://unsplash.com/photos/uwRt8jrjZTY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQ0NTQwNjYy&force=true&w=640',
      alt: 'test',
      title: 'test',
    },
    {
      url: 'https://unsplash.com/photos/AFR80W_pT8o/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Njl8fGVtYnJvaWRlcnl8ZW58MHx8fHwxNjQzNDY4NDc3&force=true&w=640',
      alt: 'test',
      title: 'test',
    },
    {
      url: 'https://unsplash.com/photos/DEmEaME-8do/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NDd8fGVtYnJvaWRlcnl8ZW58MHx8fHwxNjQ0NTQwNDk0&force=true&w=640',
      alt: 'test',
      title: 'test',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
