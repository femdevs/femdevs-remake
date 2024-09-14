/* eslint-disable camelcase */
import { NextResponse } from 'next/server';
import { sendError } from '#/src/error';

class HivePlayer {
	constructor(data) {
		this.hide = new HivePlayerGame({ victories: 0, deaths: 0, hider_kills: 0 });
		this.main = new HivePlayerGlobal();
		this.dr = new HivePlayerGame({ victories: 0, deaths: 0, checkpoints: 0, activated: 0, kills: 0 });
		this.wars = new HivePlayerGame({ final_kills: 0, kills: 0, treasure_destroyed: 0, deaths: 0 });
		this.murder = new HivePlayerGame({ victories: 0, deaths: 0, coins: 0, murders: 0, murderer_eliminations: 0 });
		this.sg = new HivePlayerGame({ crates: 0, kills: 0, deaths: 0 });
		this.sky = new HivePlayerGame({ victories: 0, ores_mined: 0, deaths: 0 });
		this.ctf = new HivePlayerGame({ victories: 0, assists: 0, deaths: 0, flags_captured: 0, kills: 0, flags_returned: 0 });
		this.drop = new HivePlayerGame({ blocks_destroyed: 0, powerups_collected: 0, vaults_used: 0, deaths: 0 });
		this.ground = new HivePlayerGame({ victories: 0, blocks_destroyed: 0, powerups_collected: 0, vaults_used: 0, deaths: 0 });
		this.build = new HivePlayerGame({ rating_good_received: 0, rating_love_received: 0, rating_meh_received: 0, rating_okay_received: 0, rating_great_received: 0 });
		this.party = new HivePlayerGame({ victories: 0, powerups_collected: 0, rounds_survived: 0 });
		this.bridge = new HivePlayerGame({});
		this.grav = new HivePlayerGame({ victories: 0, deaths: 0, maps_completed: 0, maps_completed_without_dying: 0 });
	}
}

class HivePlayerGlobal {
	constructor() {
		this.xuid = 0;
		this.username = "";
		this.username_cc = "";
		this.rank = "";
		this.first_played = 0;
		this.daily_login_streak = 0;
		this.longest_daily_login_streak = 0;
		this.hub_title_count = 0;
		this.hub_title_unlocked = [""];
		this.avatar_count = 0;
		this.avatar_unlocked = [{ url: "", name: "" }];
		this.costume_count = 0;
		this.friend_count = 0;
		this.equipped_hub_title = "";
		this.equipped_avatar = { url: "", name: "" };
		this.quest_count = 0;
		this.pets = [""];
		this.mounts = [""];
		this.hats = [""];
	}
}

class HivePlayerGame {
	constructor(data) {
		this.xp = 0;
		this.played = 0;
		this.first_played = 0;
		Object.assign(this, data);
	}
}

export async function GET(request) {
    const player = request.headers.get('x-player');
    if (!player) return sendError(6);
    const results = await fetch(`https://api.playhive.com/v0/game/all/all/${player}`).then(res => res.json());
    if (results.status === 404) return sendError(22);
    const PlayerData = new HivePlayer();
    Object
        .entries(results)
        .forEach(([key, value]) => {
            if (Array.isArray(value) && value.length === 0) return;
            if (typeof value === 'object') {
                Object
                    .entries(value)
                    .filter(([key2]) => !(key2 === 'UUID'))
                    .forEach(([key2, value2]) => (PlayerData[key][key2] = value2));
            }
        });
    return NextResponse.json(PlayerData, { status: 200 });
}
