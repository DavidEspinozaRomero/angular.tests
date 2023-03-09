import { CommonModule } from "@angular/common";
import { Component, OnInit, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CarouselComponent implements OnInit {
  @Input() images: any = [];
  image: string = "";

  constructor() {}

  ngOnInit(): void {
    this.image = this.images[0]?.url;
  }

  getImg(item: any) {
    this.image = item.url;
  }
}
