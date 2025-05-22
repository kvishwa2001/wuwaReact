interface dataProps {
  id: number;
  task: string;
  isClaimed: boolean;
  isFinished:boolean,
  point: number;
}

export const taskData: dataProps[] = [
  {
    id: 1,
    task: "Spend 100Rs wasteFull",
    isClaimed: false,
    isFinished:false,
    point: 60,
  },
  {
    id: 2,
    task: "Collect 5 Contacts",
    isClaimed: false,
    isFinished:false,
    point: 20,
  },
  {
    id: 3,
    task: "Spend Some Cash on Life",
    isClaimed: false,
    isFinished:false,
    point: 40,
  },
  {
    id: 4,
    task: "Play Game on StreamDeck",
    isClaimed: false,
    isFinished:false,
    point: 20,
  },
  {
    id: 5,
    task: "Help 5 People",
    isClaimed: false,
    isFinished:false,
    point: 50,
  },
  {
    id: 6,
    task: "Touch Some Grass",
    isClaimed: false,
    isFinished:false,
    point: 30,
  },
  {
    id: 7,
    task: "Try Something New",
    isClaimed: false,
    isFinished:false,
    point: 40,
  },
  {
    id: 8,
    task: "Make some Calls to the leads",
    isClaimed: false,
    isFinished:false,
    point: 30,
  },
  {
    id: 9,
    task: "Drink Water",
    isClaimed: false,
    isFinished:false,
    point: 20,
  },
  {
    id: 10,
    task: "Gain Mental Peace",
    isClaimed: false,
    isFinished:false,
    point: 20,
  },
];
