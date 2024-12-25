import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NzContentComponent, NzHeaderComponent, NzLayoutComponent, NzSiderComponent} from 'ng-zorro-antd/layout';
import {NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent} from 'ng-zorro-antd/menu';
import {HeaderComponent} from '../header/header.component';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NzTooltipDirective} from 'ng-zorro-antd/tooltip';

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
    NzIconDirective,
  ],
  templateUrl: './chatbot-layout.component.html',
  styleUrl: './chatbot-layout.component.scss'
})
export class ChatbotLayoutComponent {

}
