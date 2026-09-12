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
  promise: Promise<Card[]>;
}