import { PlayerCharacter } from "../entities/playerCharacter";

import Card from "../components/Card/Card";
import Avatar from "../components/Avatar/Avatar";

interface IPCStat {
  label: string;
  value: number;
}

const PCStat = ({ label, value }: IPCStat) => {
  return (
    <div className="flex flex-col items-center">
      <span>{label}</span>
      <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-solid border-black bg-gray-300 p-2.5">
        <span className="text-3xl">{value}</span>
      </div>
    </div>
  );
};

interface IPlayerCharacterCardProps {
  playerCharacter: PlayerCharacter;
}

const PlayerCharacterCard = ({
  playerCharacter,
}: IPlayerCharacterCardProps) => {
  const {
    name,
    race,
    class: pcClass,
    level,
    hitPoints,
    armorClass,
    passivePerception,
    passiveInvestigation,
    passiveInsight,
    avatarSrc,
  } = playerCharacter;

  return (
    <Card className="flex w-[450px] flex-col gap-6">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <Avatar src={avatarSrc} />
          <div>
            <h2 className="text-3xl font-bold">{name}</h2>
            <div className="italic">
              <span>{race}</span> - <span>{pcClass}</span> - lvl {level}
            </div>
          </div>
        </div>
        <PCStat label="HP" value={hitPoints} />
      </div>
      <div className="flex justify-evenly">
        <PCStat label="AC" value={armorClass} />
        <PCStat label="Perception" value={passivePerception} />
        <PCStat label="Investingation" value={passiveInvestigation} />
        <PCStat label="Insight" value={passiveInsight} />
      </div>
    </Card>
  );
};

export default PlayerCharacterCard;
