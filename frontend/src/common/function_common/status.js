// ステータス関連のfunctions

// アクセサリーの効果
const parseEffect = (effect) => {
  const statsChange = {
    hp: 0,
    mp: 0,
    attack: 0,
    defense: 0,
    magicA: 0,
    magicD: 0,
    agility: 0,
    luck: 0,
  };

  const effectEntries = effect.split(",");
  effectEntries.forEach((entry) => {
    const [key, value] = entry.split(":");
    const intValue = parseInt(value, 10); //10進数

    switch (key) {
      case "H":
        statsChange.hp += intValue;
        break;
      case "M":
        statsChange.mp += intValue;
        break;
      case "A":
        statsChange.attack += intValue;
        break;
      case "D":
        statsChange.defense += intValue;
        break;
      case "MA":
        statsChange.magicA += intValue;
        break;
      case "MD":
        statsChange.magicD += intValue;
        break;
      case "S":
        statsChange.agility += intValue;
        break;
      case "L":
        statsChange.luck += intValue;
        break;
      default:
        break;
    }
  });

  return statsChange;
};

//装備等を合わせたステータスを返す
export const calculateStats = (playerDetail) => {
  if (!playerDetail) return null;

  // プレイヤーの基本ステータス
  let hp = playerDetail.hp;
  let mp = playerDetail.mp;
  let attack = playerDetail.attack;
  let defense = playerDetail.defense;
  let magic = playerDetail.magic;
  let magicA = playerDetail.magic;
  let magicD = playerDetail.magic;
  let agility = playerDetail.agility;
  let luck = playerDetail.luck;

  // 装備のステータスを足す
  if (playerDetail.weapon) {
    attack += playerDetail.weapon.attack;
  }
  if (playerDetail.armor) {
    defense += playerDetail.armor.defense;
  }
  // アクセサリー
  if (playerDetail.accessory) {
    const accessoryStats = parseEffect(playerDetail.accessory.effect);
    hp += accessoryStats.hp;
    mp += accessoryStats.mp;
    attack += accessoryStats.attack;
    defense += accessoryStats.defense;
    magicA += accessoryStats.magicA;
    magicD += accessoryStats.magicD;
    agility += accessoryStats.agility;
    luck += accessoryStats.luck;
  }

  return {
    hp,
    mp,
    attack,
    defense,
    magicA,
    magicD,
    agility,
    luck,
  };
};
