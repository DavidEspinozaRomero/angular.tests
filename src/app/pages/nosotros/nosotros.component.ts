import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss'],
})
export class NosotrosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
