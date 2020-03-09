import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: "app-project-info-modal",
  templateUrl: "./project-info-modal.component.html",
  styleUrls: ["./project-info-modal.component.scss"]
})
export class ProjectInfoModalComponent {
  @Input() message: string;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
