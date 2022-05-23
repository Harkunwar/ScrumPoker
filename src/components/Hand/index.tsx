import { createSignal, For, type Component } from "solid-js";
import Card, { cards, type CardType } from "../Card";

export interface HandProps {}

const cardsSplit = [
  cards.slice(0, cards.length / 2),
  cards.slice(cards.length / 2),
];

const Hand: Component<HandProps> = (props) => {
  const [selectedCard, setSelectedCard] = createSignal<CardType | null>(null);

  return (
    <div class="flex flex-col justify-between">
      <For each={cardsSplit}>
        {(cards) => (
          <div class="flex flex-row justify-evenly">
            <For each={cards}>
              {(value) => (
                <Card
                  value={value}
                  name="Harkunwar"
                  onClick={() => setSelectedCard(value)}
                  selected={selectedCard() === value}
                />
              )}
            </For>
          </div>
        )}
      </For>
    </div>
  );
};

export default Hand;
