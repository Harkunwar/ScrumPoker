import { type Component, createSignal } from "solid-js";
import { createTrpcQuery } from "../../utils/trpc";

export interface HomeProps {}

const joinRoom = async (roomName: string) => {
  const target = await createTrpcQuery('createRoom', { roomName })
  history.pushState({}, "", `/${encodeURIComponent(roomName)}`);
};

const Home: Component<HomeProps> = (props) => {
  const [roomName, setRoomName] = createSignal("");

  return (
    <>
      <div class="flex min-h-screen items-center justify-center">
        <div class="min-h-1/2 bg-gray-900 border border-gray-900 rounded-2xl">
          <div class="sm:mx-24 md:mx-34 lg:mx-56 mx-auto flex items-center space-y-4 py-16 font-semibold text-gray-500 flex-col">
            <h1 class="text-white text-2xl">Scrum Poker</h1>
            <input
              class="w-full p-2 bg-gray-900 rounded-md border border-gray-700 focus:border-blue-700"
              placeholder="Room ID"
              type="text"
              name="roomname"
              onChange={(e) => setRoomName(e.currentTarget.value)}
              value={roomName()}
            />
            <button
              class="w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border border-gray-700 "
              onClick={() => joinRoom(roomName())}
            >
              Join Room
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
