import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

// Modal
import { ModalController } from 'ionic-angular';


// Pages
import { UserPostsPage } from '../user-posts/user-posts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider, public modalCtrl: ModalController) {
    this.getUsers();
  }

  getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  goToUserPostsPage() {
    this.navCtrl.push(UserPostsPage);
  }

  displayModal() {
    let modal = this.modalCtrl.create(UserPostsPage);
    modal.present();
  }

  viewPosts(user) {
    this.navCtrl.push(UserPostsPage, {
      user: user
    })
  }

}
