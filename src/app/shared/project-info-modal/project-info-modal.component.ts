import { Component, Input, Output, EventEmitter, Renderer2, Inject, OnInit, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: "app-project-info-modal",
  templateUrl: "./project-info-modal.component.html",
  styleUrls: ["./project-info-modal.component.scss"]
})
export class ProjectInfoModalComponent implements OnInit, OnDestroy {
  @Input() message: string;
  @Output() close = new EventEmitter<void>();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private render2: Renderer2
  ) {}

  ngOnInit() {
    this.disableBodyHTMLScroll();
  }

  onClose() {
    this.close.emit();
  }

  // both disable and enable used to remove scroll bar of the body html tag.
  // prevents have to many scroll bars when modal was opened
  // class is in the global styles
  disableBodyHTMLScroll(): void {
    this.render2.addClass(this.document.body, "ovh");
  }

  enableBodyHTMLScroll(): void {
    this.render2.removeClass(this.document.body, "ovh");
  }

  ngOnDestroy() {
    this.enableBodyHTMLScroll();
  }
}
