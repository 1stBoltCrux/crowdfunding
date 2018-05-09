export class Project {

  percentBacked: string = ((this.moneyPledged / this.goal) * 100).toString() + '%';

  constructor(public title: string, public about: string, public stretchGoals: string, public gamePlay: string, public story: string,  public image: string, public id: number, public video: string, public moneyPledged: number, public goal: number){
  }
}
