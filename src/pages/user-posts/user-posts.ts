import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

// HTTP
import { RestProvider } from '../../providers/rest/rest';

// Pages
import { CreateNewPostPage } from '../create-new-post/create-new-post';

import _ from 'lodash';

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
  userId: any;
  title: any;
  body: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public restProvider: RestProvider, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    console.log('UserPostsPage loaded');
    console.log(this.navParams.get('user'));

    this.getUserPosts(this.navParams.get('user').id);
    this.username = this.navParams.get('user').username;
    this.title = this.navParams.get('user').title;
    this.body = this.navParams.get('user').body;
    this.userId = this.navParams.get('user').userId;
  }

  getUserPosts(id) {
    this.restProvider.getUserPosts(id)
    .then(data => {

      // entire data object
      console.log(data);

      // filter for specific user
      this.posts = _.filter(data, { userId: id});
      console.log(this.posts);
    });
  }

  displayModal() {
    let modal = this.modalCtrl.create(CreateNewPostPage);
    modal.present();
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
