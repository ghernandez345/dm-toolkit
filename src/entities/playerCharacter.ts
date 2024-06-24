export interface PlayerCharacter {
  name: string;
  race: string;
  class: string;
  level: number;
  hitPoints: number;
  armorClass: number;
  passivePerception: number;
  passiveInvestigation: number;
  passiveInsight: number;
  avatarSrc?: string;
}

export const getPlayerCharacters = (): PlayerCharacter[] => {
  return [
    {
      name: "Test Character",
      race: "Human",
      class: "Fighter",
      level: 3,
      hitPoints: 30,
      armorClass: 16,
      passivePerception: 12,
      passiveInvestigation: 10,
      passiveInsight: 14,
      avatarSrc: "https://via.placeholder.com/100",
    },
  ];
};
