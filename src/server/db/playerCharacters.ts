export interface PlayerCharacter {
  id: number;
  name: string;
  class: string;
  race: string;
  level: number;
  armour_class: number;
  max_hit_points: number;
  passive_perception: number;
  passive_investigation: number;
  passive_insight: number;
}

export const createPlayerCharacter = (db: any) => {
  db.connect();

  const query = `INSERT INTO player_characters`;

  db.end();
};
