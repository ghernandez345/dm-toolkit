import { getPlayerCharacters } from "./entities/playerCharacter";

import PlayerCharacterCard from "./PlayerCharacterCard/PlayerCharacterCard";

function App() {
  const testCharacters = getPlayerCharacters();

  return (
    <div className="p-6">
      {testCharacters.map((playerCharacter) => (
        <PlayerCharacterCard
          key={playerCharacter.name}
          playerCharacter={playerCharacter}
        />
      ))}
    </div>
  );
}

export default App;
