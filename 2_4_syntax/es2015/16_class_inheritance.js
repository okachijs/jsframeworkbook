class Person {
    constructor (id, name) {
        this.id = id;
        this.name = name;
    }
    printName () {
        console.log(this.name);
    }
}

class Participant extends Person {
    constructor (id, name, channel) {
        // 親クラスである Person の constructor 呼び出し
        super(id, name);
        this.channel = channel;
    }

    sendMessage(message) {
        console.log(`${this.name}は${this.channel}に${message}を投稿しました`);
    }
}
