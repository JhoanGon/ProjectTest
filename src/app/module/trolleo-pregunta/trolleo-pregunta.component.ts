import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-trolleo-pregunta',
  templateUrl: './trolleo-pregunta.component.html',
  styleUrls: ['./trolleo-pregunta.component.scss']
})
export class TrolleoPreguntaComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  visible = false;

  gifUrls: string[] = [
    'https://encoded.pe/sanvalentin/mocha.gif',
    'https://encoded.pe/sanvalentin/mocha2.gif',
    'https://encoded.pe/sanvalentin/mocha3.gif',
    'https://encoded.pe/sanvalentin/mocha4.gif'
  ];
  gifUrlsFinal: string[] = [
    'https://encoded.pe/sanvalentin/mocha6final.gif',
    'https://encoded.pe/sanvalentin/mocha7final.gif',
    'https://encoded.pe/sanvalentin/mocha9final.gif'
  ]
  currentGifIndex = 0;
  displayGif = true;

  currentGifIndexFinal = 0;
  displayGifFinal = true;

  ngOnInit(): void {
    this.startGifTimer();
  }

  startGifTimer(): void {
    setInterval(() => {
      this.changeGif();
    }, 2500);
  }

  changeGif(): void {
    this.currentGifIndex = (this.currentGifIndex + 1) % this.gifUrls.length;
    this.displayGif = !this.displayGif;
  }
  startGifTimerFinal(): void {
    setInterval(() => {
      this.changeGifFinal();
    }, 2500);
  }

  changeGifFinal(): void {
    this.currentGifIndexFinal = (this.currentGifIndexFinal + 1) % this.gifUrlsFinal.length;
    this.displayGifFinal = !this.displayGifFinal;
  }
  moveNoButton(): void {
    const noButton = this.el.nativeElement.querySelector('#noBtn');
    const containerWidth = 600;
    const containerHeight = 600;

    const randomX = Math.floor(Math.random() * (window.innerWidth - containerWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - containerHeight));

    this.renderer.setStyle(noButton, 'position', 'absolute');
    this.renderer.setStyle(noButton, 'left', `${randomX}px`);
    this.renderer.setStyle(noButton, 'top', `${randomY}px`);
  }
  btnYes(){
    this.startGifTimerFinal();
    this.visible = true;
  }
}
