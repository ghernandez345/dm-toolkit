"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  return db.createTable("player_characters", {
    id: { type: "int", primaryKey: true, autoIncrement: true },
    name: { type: "string", length: 100 },
    class: { type: "string", length: 50 },
    race: { type: "string", length: 50 },
    level: "smallint",
    armour_class: "smallint",
    max_hit_points: "smallint",
    passive_perception: "smallint",
    passive_investigation: "smallint",
    passive_insight: "smallint",
  });
};

exports.down = function (db) {
  return db.dropTable("player_characters");
};

exports._meta = {
  version: 1,
};
