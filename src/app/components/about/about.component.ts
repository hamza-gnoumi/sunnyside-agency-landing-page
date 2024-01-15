import { Component } from '@angular/core';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  brand: Article = {
    title: "Transform your brand",
    content: "We are a full-service creative agency specializing in helping brands grow fast.Engage your clients through compelling visuals that do most of the marketing for you.",
    desktopImage: "../../../assets/images/desktop/image-transform.jpg",
    mobileImage: "../../../assets/images/mobile/image-transform.jpg"
  };
  audience: Article = {
    title: "Stand out to the right audience",
    content: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.",
    desktopImage: "../../../assets/images/desktop/image-stand-out.jpg",
    mobileImage: "../../../assets/images/mobile/image-stand-out.jpg"
  }
  graphicDesign: Article = {
    title: "Graphic design",
    content: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
    desktopImage: "../../../assets/images/desktop/image-graphic-design.jpg",
    mobileImage: "../../../assets/images/mobile/image-graphic-design.jpg"
  }
  photography: Article = {
    title: "Photography",
    content: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    desktopImage: "../../../assets/images/desktop/image-photography.jpg",
    mobileImage: "../../../assets/images/mobile/image-photography.jpg"
  }

}
