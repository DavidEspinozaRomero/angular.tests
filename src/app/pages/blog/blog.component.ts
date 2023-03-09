import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
