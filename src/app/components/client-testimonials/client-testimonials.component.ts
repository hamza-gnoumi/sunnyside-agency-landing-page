import { Component } from '@angular/core';
import { Client } from 'src/app/model/client';

@Component({
  selector: 'app-client-testimonials',
  templateUrl: './client-testimonials.component.html',
  styleUrls: ['./client-testimonials.component.scss']
})
export class ClientTestimonialsComponent {
  Emily: Client = {
    ImageSource: "../../../assets/images/image-emily.jpg",
    name: "Emily R.",
    testemonial: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    profession: "Marketing Director"
  };
  Thomas: Client = {
    ImageSource: "../../../assets/images/image-thomas.jpg",
    name: "Thomas S.",
    testemonial: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    profession: "Chief Operating Officer "
  };
  Jennie: Client = {
    ImageSource: "../../../assets/images/image-jennie.jpg",
    name: "Jennie F.",
    testemonial: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    profession: "Business Owner"
  };
}






