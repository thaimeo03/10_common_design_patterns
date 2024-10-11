"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMS = void 0;
class SMS {
    constructor(subject, userInfo) {
        this.subject = subject;
        this.userInfo = userInfo;
        this.desc = "";
    }
    update(desc) {
        this.desc = desc;
        this.display();
    }
    subscribe() {
        console.log(`Subscribing ${this.userInfo} to ${this.subject.subjectDetails()} ...`);
        this.subject.subscribeObserver(this);
        console.log(`Subscribed successfully.`);
    }
    unSubscribe() {
        console.log(`Unsubscribing ${this.userInfo} from ${this.subject.subjectDetails()} ...`);
        this.subject.unSubscribeObserver(this);
        console.log(`Unsubscribed successfully.`);
    }
    display() {
        console.log(this.userInfo + ": " + this.desc);
    }
}
exports.SMS = SMS;
