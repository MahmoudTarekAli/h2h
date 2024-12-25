import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {HttpClient, HTTP_INTERCEPTORS, provideHttpClient} from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  declarations: [],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: JwtInterceptor,
    //   multi: true,
    // },
    // {provide: HTTP_INTERCEPTORS, useClass: NgZoneHttpInterceptor, multi: true},
    provideHttpClient()

  ],
  exports: [RouterModule],
})
export class CoreModule {
}
