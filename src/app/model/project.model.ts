export class Project {

  // percentBacked: string = ((this.moneyPledged / this.goal) * 100).toString() + '%';

  constructor(public title: string, public about: string, public stretchGoals: string, public gamePlay: string, public story: string,  public image: string, public video: string, public moneyPledged: string, public goal: string){
  }
}
