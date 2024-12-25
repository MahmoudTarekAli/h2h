import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';
import {ChatbotLayoutComponent} from './components/chatbot-layout/chatbot-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./home/home.component')
          .then(c => c.HomeComponent)
      }
    ]
  },
  {
    path: 'chatbot',
    component: ChatbotLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/chatbot/chatbot.module')
          .then(m => m.ChatbotModule)
      }
    ]
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./authentication/login/login.component').then(m => m.LoginComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
