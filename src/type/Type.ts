export interface Card {
  id: number;
  name: string;
  icon: string;
  badge: string | null;
  description: string;
  category: string;
  level: string;
  rating: number;
  color: string
}

export interface CardLeftProps {
  promise: Promise<Card[]>,
  btnCliked?: (e: EventType) => void;
  isBtnclicked: boolean,
  addToStack: string[];

}

export interface CardRightProps {
  promise: Promise<Card[]>;
  addToStack: string[];
  isBtnclicked: boolean,
  setAddToStack: (value: string[]) => void;
}

export type EventType = React.MouseEvent<HTMLButtonElement>;