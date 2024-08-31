import { getPlayerCharacters } from "./entities/playerCharacter";
import NewPCForm from "./NewPCForm/NewPCForm";

import PlayerCharacterCard from "./PlayerCharacterCard/PlayerCharacterCard";

const ActionsButton = () => {
  // TODO: fix the plus charaters alignment

  const onClick = () => {};

  return (
    <button
      className="absolute bottom-4 rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-400 active:bg-blue-600"
      onClick={onClick}
    >
      <span>&#43;</span>
    </button>
  );
};

function App() {
  const testCharacters = getPlayerCharacters();

  return (
    <div className="min-h-screen p-6">
      <>
        {testCharacters.map((playerCharacter) => (
          <PlayerCharacterCard
            key={playerCharacter.name}
            playerCharacter={playerCharacter}
          />
        ))}
      </>

      <NewPCForm />
      <ActionsButton />
    </div>
  );
}

export default App;
