import { Component, Input } from '@angular/core';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-about-box',
  templateUrl: './about-box.component.html',
  styleUrls: ['./about-box.component.scss']
})
export class AboutBoxComponent {
  @Input()
  article: Article;
  @Input()
  color;



}
