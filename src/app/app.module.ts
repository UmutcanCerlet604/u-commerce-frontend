import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { PasswordModule } from 'primeng/password';
import { SidebarModule } from 'primeng/sidebar';
import { LoginComponent } from './login/login.component';
import { DataViewModule } from 'primeng/dataview';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './admin/menu/menu.component';
import { MainComponent } from './main/main.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { UsermenuComponent } from './user/usermenu/usermenu.component';
import {ToastModule} from 'primeng/toast';
import { RegisterComponent } from './user/register/register.component';
import { ProductlistComponent } from './admin/productlist/productlist.component';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ProgressBarModule} from 'primeng/progressbar';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { CategorylistComponent } from './admin/categorylist/categorylist.component';
import { AddbrandComponent } from './admin/addbrand/addbrand.component';
import { KeyFilterModule } from 'primeng/keyfilter';
import { NgxSpinnerModule } from "ngx-spinner";
import { HomeComponent } from './user/home/home.component';
import { BasketComponent } from './user/basket/basket.component';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { TotalBasketPipe } from './pipe/total-basket.pipe';
import { PastorderComponent } from './user/pastorder/pastorder.component';
import {TabViewModule} from 'primeng/tabview';
import {AccordionModule} from 'primeng/accordion';
import { ProductdetailComponent } from './user/productdetail/productdetail.component';
import { CardModule } from 'primeng/card';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import { AvatarPipe } from './pipe/avatar.pipe';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    MainComponent,
    AddproductComponent,
    UsermenuComponent,
    RegisterComponent,
    ProductlistComponent,
    CategorylistComponent,
    AddbrandComponent,
    HomeComponent,
    BasketComponent,
    TotalBasketPipe,
    PastorderComponent,
    ProductdetailComponent,
    AvatarPipe,
    AdminhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputTextModule,
    ChartModule,
		CheckboxModule,
		ButtonModule,
		RadioButtonModule,
		InputTextareaModule,
		DropdownModule,
    FormsModule,
    PasswordModule,
    SidebarModule,
    HttpClientModule,
    DataViewModule,
    ToastModule,
    ConfirmDialogModule,
    InputNumberModule,
    RatingModule,
    ToolbarModule,
    FileUploadModule,
    ProgressBarModule,
    DialogModule,
    ContextMenuModule,
    MultiSelectModule,
    SliderModule,
    ReactiveFormsModule,
    CalendarModule,
    TableModule,
    MessagesModule,
    MessageModule,
    MultiSelectModule,
    KeyFilterModule,
    NgxSpinnerModule,
    VirtualScrollerModule,
    InputNumberModule,
    TabViewModule,
    AccordionModule,
    CardModule,
    AvatarModule,
    AvatarGroupModule,
    
  ],
  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
