import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-join-as',
  templateUrl: './join-as.component.html',
  styleUrl: './join-as.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JoinAsComponent {}
