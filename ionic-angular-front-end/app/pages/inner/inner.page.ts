import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
 
@Component({
  selector: 'app-inner',
  templateUrl: './inner.page.html',
  styleUrls: ['./inner.page.scss'],
})
export class InnerPage implements OnInit {
 
  data = '';
 
  constructor(private authService: AuthService, private storage: Storage, private toastController: ToastController) { }
 
  ngOnInit() {
  }
 
  loadSpecialInfo() {
    this.authService.getSpecialData().subscribe(res => {
      this.data = res['message'];
    });
  }
 
  logout() {
    this.authService.logout();
  }
 
  clearToken() {
    // ONLY FOR TESTING!
    this.storage.remove('access_token');
 
    let toast = this.toastController.create({
      message: 'JWT removed',
      duration: 3000
    });
    toast.then(toast => toast.present());
  }
 
}