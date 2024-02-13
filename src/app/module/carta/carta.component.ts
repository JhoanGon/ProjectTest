import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent {
  constructor(private renderer: Renderer2, private el: ElementRef, readonly router: Router) { }

  ngOnInit(): void {
    const leftCurtain = this.el.nativeElement.querySelector('.left-curtain') as HTMLElement;
    const rightCurtain = this.el.nativeElement.querySelector('.right-curtain') as HTMLElement;

    if (leftCurtain && rightCurtain) {
      this.renderer.setStyle(leftCurtain, 'width', '0%');
      this.renderer.setStyle(rightCurtain, 'width', '0%');
    }

    const valentinesDay = this.el.nativeElement.querySelector('.valentines-day');

    if (valentinesDay) {
      this.renderer.listen(valentinesDay, 'click', () => {
        const envelope = this.el.nativeElement.querySelector('.envelope') as HTMLElement;

        if (envelope) {
          this.renderer.setStyle(envelope, 'animation', 'fall 3s linear 1');
          this.renderer.setStyle(envelope, '-webkit-animation', 'fall 3s linear 1');

          setTimeout(() => {
            this.renderer.setStyle(envelope, 'display', 'none');

            const elementsToHide = this.el.nativeElement.querySelectorAll('.valentines-day .heart, .valentines-day .text, .valentines-day .front');

            elementsToHide.forEach((element: HTMLElement) => {
              this.renderer.setStyle(element, 'display', 'none');
            });

            const card = this.el.nativeElement.querySelector('#card');

            if (card) {
              this.renderer.setStyle(card, 'visibility', 'visible');
              this.renderer.setStyle(card, 'opacity', '0');
              this.renderer.setStyle(card, 'transform', 'scale(0.1)');

              anime({
                targets: card,
                opacity: 1,
                duration: 1000,
                easing: 'linear',
                scale: (el : any, i : any, l : any) => {
                  const scale = 1 + Math.sin(i * Math.PI) * 0.1;
                  return scale;
                },
              });
            }
          }, 800);
        }
      });
    }
  }
  clickGoTrolleo(){
    this.router.navigateByUrl('/Pregunta_Final');
  }
}

