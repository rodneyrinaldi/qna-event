class ServerGlobal {
    private static _instance: ServerGlobal;
    private static _questions: String[];

    private constructor() {
        let _questions = [];
    }

    static getInstance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new ServerGlobal();
        return this._instance;
    }

    static getQuestions() {
        return this._questions;
    }

    static addQuestion(question) {
        this._questions.push(question);
    }
}

export default ServerGlobal;


// import ServerGlobal from './globalsingleton.ts';

// const instance = ServerGlobal.getInstance()

