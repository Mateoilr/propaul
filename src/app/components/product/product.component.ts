import { Component } from '@angular/core';
import { NzFormDirective } from 'ng-zorro-antd/form';
import { NzFormItemComponent } from 'ng-zorro-antd/form';
import { NzFormLabelComponent } from 'ng-zorro-antd/form';
import { NzFormControlComponent } from 'ng-zorro-antd/form';
import { NzColDirective } from 'ng-zorro-antd/grid';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, NonNullableFormBuilder } from '@angular/forms';
import { Validators as Myvalidators  } from '@angular/forms';
import { ExcuselistService } from '../../services/excuselist.service';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    NzFormControlComponent,
    NzFormDirective,
    NzFormItemComponent,
    NzFormLabelComponent,
    NzColDirective,
    ReactiveFormsModule,
    NzInputDirective,
    NzButtonComponent,
    NzInputNumberComponent,
    CommonModule,
    NgIf,],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor (
    private service: ExcuselistService,
    private fb: NonNullableFormBuilder,
    private notification: NzNotificationModule

  ) {}

  validateForm: FormGroup <{
    
  }>

}
