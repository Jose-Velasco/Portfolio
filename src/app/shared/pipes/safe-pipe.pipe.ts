import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}
  // use pipe to bind to [src] of iframe tag to display dynamic url
  // sanitizer.sanitize function inside of bypassSecurityTrustResourceUrl
  // might not be needed if not then just pass the url parameter in the bypass
  transform(url) {
    // return this.sanitizer.bypassSecurityTrustResourceUrl(
    //   this.sanitizer.sanitize(SecurityContext.URL,`https://www.youtube.com/embed/${url}`)
    //   );
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${url}`);
  }

}
