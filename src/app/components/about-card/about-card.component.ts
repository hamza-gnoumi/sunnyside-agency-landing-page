import { Component, Input } from '@angular/core';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss']
})
export class AboutCardComponent {
  @Input()
  article: Article;
  @Input()
  reverse: Boolean = false;

}
