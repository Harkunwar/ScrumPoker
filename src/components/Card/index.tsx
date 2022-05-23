import type { Component } from "solid-js";

export const cards = [
  "0",
  "1/2",
  "1",
  "2",
  "3",
  "5",
  "8",
  "13",
  "20",
  "40",
  "100",
  "∞",
  "?",
  "☕",
] as const;

export type CardType = typeof cards[number];

export interface CardProps {
  value: CardType;
  name: string;
  selected: boolean;
  onClick: () => {};
}

const Card: Component<CardProps> = (props) => {
  return (
    <div onClick={props.onClick}>
      <div
        class={`${
          props.selected ? "bg-green-400" : "bg-black"
        } hover:bg-green-500 p-8 rounded-xl shadow-xl shadow-neutral-900 cursor-pointer`}
      >
        <div class="content-center">
          <p class="text-lg font-semibold text-white w-8 text-center">
            {props.value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
