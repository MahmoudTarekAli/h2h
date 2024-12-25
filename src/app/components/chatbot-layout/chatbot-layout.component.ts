import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NzContentComponent, NzHeaderComponent, NzLayoutComponent, NzSiderComponent} from 'ng-zorro-antd/layout';
import {NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent} from 'ng-zorro-antd/menu';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzIconDirective} from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-chatbot-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NzContentComponent,
    NzLayoutComponent,
    NzMenuDirective,
    NzMenuItemComponent,
    NzSiderComponent,
    NzButtonComponent,
    NzIconDirective,
  ],
  templateUrl: './chatbot-layout.component.html',
  styleUrl: './chatbot-layout.component.scss'
})
export class ChatbotLayoutComponent {

}
