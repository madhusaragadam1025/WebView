import { GameModel } from "../Model/GameModel";
import Model  from "../Resources/Model.json"
export class GameManager {

    gameModel : GameModel[] = [];
    currentLevel : number= 0 ;
    totalLevels : number = 0;

    constructor() {
        this.loadGames();
        this.totalLevels = this.gameModel.length;
    }

    async informWhenGameLoaded() : Promise<boolean> {
        return new Promise((resolve) => {
            setTimeout(() => {
              resolve(true);
            }, 3000);
          });
    }

    loadGames() {
        this.gameModel = Model;
    }

    getLevelData(level : number) : GameModel {
        return this.gameModel[level];
    }
}