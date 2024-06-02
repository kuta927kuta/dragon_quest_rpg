// 装備ごとの説明文（購入時）
export const generateDescription = (item) => {
    let description = '';

    if (item.attack) {
        description += `物理攻撃力+${item.attack} `;
    }

    if (item.defense) {
        description += `物理防御力+${item.defense} `;
    }

    if (item.effect) {
        const effectParts = item.effect.split(',');
        effectParts.forEach(part => {
            const [key, value] = part.split(':');
            const effectValue = parseInt(value, 10);
            let effectText = '';

            switch (key) {
                case 'A':
                    effectText = `物理攻撃力${effectValue > 0 ? '+' : ''}${effectValue}`;
                    break;
                case 'D':
                    effectText = `物理防御力${effectValue > 0 ? '+' : ''}${effectValue}`;
                    break;
                case 'MA':
                    effectText = `魔法攻撃力${effectValue > 0 ? '+' : ''}${effectValue}`;
                    break;
                case 'MD':
                    effectText = `魔法防御力${effectValue > 0 ? '+' : ''}${effectValue}`;
                    break;
                case 'S':
                    effectText = `俊敏力${effectValue > 0 ? '+' : ''}${effectValue}`;
                    break;
                case 'L':
                    effectText = `運${effectValue > 0 ? '+' : ''}${effectValue}`;
                    break;
                default:
                    break;
            }

            description += `${effectText} `;
        });
    }

    return description.trim();
};
