import { type Component } from "solid-js";
import Hand from "../Hand";

export interface PokerProps {}

const Poker: Component<PokerProps> = (props) => {
  return (
    <div>
      <Hand />
    </div>
  );
};

export default Poker;
