import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { NFC, Ndef } from '@ionic-native/nfc';
import { Subscription } from 'rxjs/Rx'



@IonicPage()
@Component({
  selector: 'page-nfc-share',
  templateUrl: 'nfc-share.html',
})
export class NfcSharePage {
  readingTag: boolean = false;
  writingTag: boolean = false;
  isWriting: boolean = false;
  ndefMsg: string = "";
  subscriptions: Array<Subscription> = new Array<Subscription>();
  constructor(
    private platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams,
    private nfc: NFC,
    private ndef: Ndef) {
   }

  cekNFC() {
    this.subscriptions.push(this.nfc.addNdefListener()
      .subscribe(data => {
        if (this.readingTag) {
          let payload = data.tag.ndefMessage[0].payload;
          let tagContent = this.nfc.bytesToString(payload).substring(3);
          this.readingTag = false;
          console.log("tag data", tagContent);
        }
        else if (this.writingTag) {
          if (!this.isWriting) {
            this.isWriting = true;
            this.nfc.write([this.ndefMsg])
              .then(() => {
                this.writingTag = false;
                this.isWriting = false;
                console.log("written");
              })
              .catch(err => {
                this.writingTag = false;
                this.isWriting = false;
              });
          }
        }
      },
      err => {

      })
    );
  }
  ionViewWillEnter() {
    this.platform.ready().then(() => {
      this.cekNFC();
    });
  }

  ionViewWillLeave() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  readTag() {
    this.readingTag = true;
  }
}



