### Scroll to Item (Carousel)

- Angular directive: 
```typescript
import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  Output,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appScrollToItem]',
})
export class ScrollToItemDirective {
  @Input() items: any[];
  @Input() containerId: string;
  @Input() currentIndex: number;
  @Output() updateIndex = new EventEmitter<number>();
  private newIndex: number;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if (!isPlatformBrowser(this.platformId)) return;

    const direction = this.el.nativeElement.getAttribute('data-direction');
    const container = this.document.getElementById(this.containerId);
    if (!container) return;

    const containerElement = container as HTMLElement;
    const maxScroll = containerElement.scrollWidth - containerElement.clientWidth;
    this.newIndex = this.currentIndex;

    if (direction !== 'prev' && containerElement.scrollLeft >= maxScroll) {
      this.newIndex = 0;
    } else if (direction === 'next') {
      this.newIndex = this.newIndex >= this.items.length - 1 ? 0 : this.newIndex + 1;
    } else if (direction === 'prev') {
      this.newIndex = this.newIndex < 1 ? 0 : this.newIndex - 1;
    }

    this.updateIndex.emit(this.newIndex);
    this.scrollToItem();
  }

  private scrollToItem() {
    if (!isPlatformBrowser(this.platformId)) return;

    const container = this.document.getElementById(this.containerId);
    if (!container) return;

    const elementId = `tm-${this.newIndex}`;
    const element = this.document.getElementById(elementId);

    if (element) {
      const elementOffset = element.offsetLeft;
      const containerOffset = container.offsetLeft;
      this.renderer.setProperty(container, 'scrollLeft', elementOffset - containerOffset);
    }
  }
}
```

- html:
```html
<section class="p-3 p-md-5" id="testimonials">
  <h2 class="black-text">
    {{ "site.youreInGreatCompany" | translate | titlecase }} 👍
  </h2>
  <div class="testimonial-wrapper d-flex" id="scrollContainer">
    <div class="testimonial primary-bg overflow-auto" id="tm-0">
      <div class="d-flex align-items-center mb-3 header primary-bg">
        <img src="{{ 'testimonial.one.imgUrl' | translate }}" alt="" class="testimonial-img" />
        <div class="d-flex flex-column ms-3">
          <h5 class="text-white">
            {{ "testimonial.one.name" | translate | titlecase }}
          </h5>
          <p class="subtitle2 text-white m-0" style="font-weight: 400">
            {{ "testimonial.one.occupation" | translate }}
          </p>
        </div>
      </div>
      <div class="body">
        <p class="body1 text-white m-0" style="font-weight: 400">
          "{{ "testimonial.one.body" | translate }}"
        </p>
      </div>
    </div>
    <div class="testimonial primary-bg overflow-auto" id="tm-1">
      <div class="d-flex align-items-center mb-3 header primary-bg">
        <img src="{{ 'testimonial.two.imgUrl' | translate }}" alt="" class="testimonial-img" />
        <div class="d-flex flex-column ms-3">
          <h5 class="text-white">
            {{ "testimonial.two.name" | translate | titlecase }}
          </h5>
          <p class="subtitle2 text-white m-0" style="font-weight: 400">
            {{ "testimonial.two.occupation" | translate }}
          </p>
        </div>
      </div>
      <div class="body">
        <p class="body1 text-white m-0" style="font-weight: 400">
          "{{ "testimonial.two.body" | translate }}"
        </p>
      </div>
    </div>
    <div class="testimonial primary-bg overflow-auto" id="tm-2">
      <div class="d-flex align-items-center mb-3 header primary-bg">
        <img src="{{ 'testimonial.three.imgUrl' | translate }}" alt="" class="testimonial-img" />
        <div class="d-flex flex-column ms-3">
          <h5 class="text-white">
            {{ "testimonial.three.name" | translate | titlecase }}
          </h5>
          <p class="subtitle2 text-white m-0" style="font-weight: 400">
            {{ "testimonial.three.occupation" | translate }}
          </p>
        </div>
      </div>
      <div class="body">
        <p class="body1 text-white m-0" style="font-weight: 400">
          "{{ "testimonial.three.body" | translate }}"
        </p>
      </div>
    </div>
    <div class="testimonial primary-bg overflow-auto" id="tm-3">
      <div class="d-flex align-items-center mb-3 header primary-bg">
        <img src="{{ 'testimonial.four.imgUrl' | translate }}" alt="" class="testimonial-img" />
        <div class="d-flex flex-column ms-3">
          <h5 class="text-white">
            {{ "testimonial.four.name" | translate | titlecase }}
          </h5>
          <p class="subtitle2 text-white m-0" style="font-weight: 400">
            {{ "testimonial.four.occupation" | translate }}
          </p>
        </div>
      </div>
      <div class="body">
        <p class="body1 text-white m-0" style="font-weight: 400">
          "{{ "testimonial.four.body" | translate }}"
        </p>
      </div>
    </div>
    <div class="testimonial primary-bg overflow-auto" id="tm-4">
      <div class="d-flex align-items-center mb-3 header primary-bg">
        <img src="{{ 'testimonial.five.imgUrl' | translate }}" alt="" class="testimonial-img" />
        <div class="d-flex flex-column ms-3">
          <h5 class="text-white">
            {{ "testimonial.five.name" | translate | titlecase }}
          </h5>
          <p class="subtitle2 text-white m-0" style="font-weight: 400">
            {{ "testimonial.five.occupation" | translate }}
          </p>
        </div>
      </div>
      <div class="body">
        <p class="body1 text-white m-0" style="font-weight: 400">
          "{{ "testimonial.five.body" | translate }}"
        </p>
      </div>
    </div>
    <div class="testimonial primary-bg overflow-auto" id="tm-5">
      <div class="d-flex align-items-center mb-3 header primary-bg">
        <img src="{{ 'testimonial.six.imgUrl' | translate }}" alt="" class="testimonial-img" />
        <div class="d-flex flex-column ms-3">
          <h5 class="text-white">
            {{ "testimonial.six.name" | translate | titlecase }}
          </h5>
          <p class="subtitle2 text-white m-0" style="font-weight: 400">
            {{ "testimonial.six.occupation" | translate }}
          </p>
        </div>
      </div>
      <div class="body">
        <p class="body1 text-white m-0" style="font-weight: 400">
          "{{ "testimonial.six.body" | translate }}"
        </p>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center gap-5">
    <button appScrollToItem [items]="testimonialArr" [containerId]="'scrollContainer'" [currentIndex]="testimonialIndex"
      (updateIndex)="updateTestimonialIndex($event)" data-direction="prev" class="tm-btn"
      [disabled]="testimonialIndex === 0">
      <img src="../../../assets/images/new-marketing/testimony-arrow.svg" alt="Prev Arrow"
        style="transform: rotate(180deg)" />
    </button>
    <button appScrollToItem [items]="testimonialArr" [containerId]="'scrollContainer'" [currentIndex]="testimonialIndex"
      (updateIndex)="updateTestimonialIndex($event)" data-direction="next" class="tm-btn">
      <img src="../../../assets/images/new-marketing/testimony-arrow.svg" alt="next Arrow" />
    </button>
  </div>
```