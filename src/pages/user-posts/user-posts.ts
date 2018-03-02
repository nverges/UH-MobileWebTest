import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

// HTTP
import { RestProvider } from '../../providers/rest/rest';

// import _ from 'lodash';

/**
 * Generated class for the UserPostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-posts',
  templateUrl: 'user-posts.html',
})
export class UserPostsPage {

  users: any;
  username: any;
  posts: any;
  id: any;
  userID: any;
  title: any;
  body: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public restProvider: RestProvider, public modalCtrl: ModalController) {
    this.getUserPosts(this.username);
  }

  ionViewDidLoad() {
    console.log('UserPostsPage loaded');
    this.username = this.navParams.get('user').username;
    this.title = this.navParams.get('user').title;
    this.body = this.navParams.get('user').body;
  }

  getUserPosts(id) {
    this.restProvider.getUserPosts(id)
    .then(data => {
      this.users = data;
      console.log(this.users);
      // let test = _.filter(this.users, [this.userID]);
      // console.log(test);
    });
  }

  displayModal() {
    let modal = this.modalCtrl.create(UserPostsPage);
    modal.present();
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
