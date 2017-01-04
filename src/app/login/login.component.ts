
import { Component, OnInit, Inject } from '@angular/core';
//import { AuthService } from '../core/auth.service'; //引入AuthService，紧耦合

@Component({
  selector: 'app-login',
  template: `
    <div>
      <form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">
        <fieldset ngModelGroup="login">
        
          <!--
            方括号[]的作用是说把等号后面当成表达式来解析而不是当成字符串
            []的含义是单向绑定，就是说我们在组件中给model赋的值会设置到HTML的input控件中
            [()]是双向绑定的意思，就是说HTML对应控件的状态的改变会反射设置到组件的model中
            ngModel是FormModule中提供的指令，它负责从Domain Model（这里就是username或password）中创建一个FormControl的实例，并将这个实例和表单的控件绑定起来
          -->
          <input type="text" name="username" [(ngModel)]="username" #usernameRef="ngModel" required minlength="3"/>
          <div *ngIf="usernameRef.errors?.required">this is required</div>
          <div *ngIf="usernameRef.errors?.minlength">should be at least 3 charactors</div>
          
          <input type="password" name="password" [(ngModel)]="password" #passwordRef="ngModel" required/>
          <div *ngIf="passwordRef.errors?.required">this is required</div>
          
          <button (click)="onClick()">Login</button>
          <button type="submit">Submit</button>
          
        </fieldset>
      </form>
    </div>
  `,
  styles: [`
    input.ng-invalid{
      border: 3px solid red;
    }
    input.ng-valid{
      border: 3px solid green;
    }
  `]
  //,providers:[AuthService]
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(@Inject('auth') private service) {
    //this.service = new AuthService();  //引入服务
  }

  ngOnInit() {
  }

  //onClick(username, password) {
    //调用service的方法
    //console.log('auth result is: ' + this.service.loginWithCredentials(username, password));
  //}

  onSubmit(formValue) {
    console.log('auth result is: '
      + this.service.loginWithCredentials(formValue.login.username, formValue.login.password));
  }

}
