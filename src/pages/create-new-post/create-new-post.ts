import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the CreateNewPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-new-post',
  templateUrl: 'create-new-post.html',
})
export class CreateNewPostPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

  }

  ionViewDidLoad() {
    console.log('CreateNewPostPage loaded');
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
