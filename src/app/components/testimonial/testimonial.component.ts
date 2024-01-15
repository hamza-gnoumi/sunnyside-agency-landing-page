import { Component, Input } from '@angular/core';
import { Client } from 'src/app/model/client';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {

  @Input()
  client: Client;




}
