//═══════════════════════════════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Itachi Bot Inc. Itachi-md-bot 
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
class Memory {
    constructor() {
        this.data = null;
    }
    read() {
        return Promise.resolve(this.data);
    }
    write(obj) {
        this.data = obj;
        return Promise.resolve();
    }
}
module.exports = { Memory };
