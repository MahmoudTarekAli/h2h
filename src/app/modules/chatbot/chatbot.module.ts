import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatbotRoutingModule } from './chatbot-routing.module';
import { ChatbotComponent } from './chatbot.component';
import {NzContentComponent, NzHeaderComponent, NzLayoutComponent, NzSiderComponent} from 'ng-zorro-antd/layout';
import {NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent} from 'ng-zorro-antd/menu';
import {NzBreadCrumbComponent, NzBreadCrumbItemComponent} from 'ng-zorro-antd/breadcrumb';
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";
import {NzIconDirective} from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    ChatbotComponent
  ],
  imports: [
    CommonModule,
    ChatbotRoutingModule,
    NzLayoutComponent,
    NzHeaderComponent,
    NzSiderComponent,
    NzMenuDirective,
    NzSubMenuComponent,
    NzMenuItemComponent,
    NzBreadCrumbComponent,
    NzContentComponent,
    NzBreadCrumbItemComponent,
    NzInputGroupComponent,
    NzIconDirective,
    NzInputDirective
  ]
})
export class ChatbotModule { }
