import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-latex-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latex-viewer.component.html',
  styleUrls: ['./latex-viewer.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LatexViewerComponent implements OnChanges {
  @Input({ required: true }) latexData = '';

  refresh = true;

  constructor() {
    this.loadScript();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // TODO: Checkbox for "Realtime update" option and "Click to update" option
    if (Object.hasOwn(changes, 'latexData')) {
      this.refresh = false;
      timer(50).subscribe(() => this.refresh = true);
    }
  }

  loadScript(reload?: boolean) {
    const oldElement = document.getElementById('load-latex') as HTMLScriptElement | null;
    if (!reload && oldElement) {
      // console.log('Already loaded!');
      return;
    }

    const script = document.createElement('script');
    script.setAttribute('id', 'load-latex');
    script.type = 'module';
    script.innerHTML = 'import { LaTeXJSComponent } from "./assets/libs/latex/latex.mjs"; if (!customElements.get("latex-js")) { customElements.define("latex-js", LaTeXJSComponent) }';

    if (oldElement) {
      oldElement.replaceWith(script);
    } else {
      document.head.appendChild(script);
    }
  }
}
