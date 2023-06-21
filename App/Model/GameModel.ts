export class GameModel {

    imgUrl :  string;
    name: string;

    constructor(imageUrl: string, correctAnswer: string) {

        this.imgUrl = imageUrl;
        this.name = correctAnswer;
    }
}