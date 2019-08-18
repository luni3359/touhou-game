class GameLoop {
    constructor() {
        this.FRAMES_PER_SECOND = 60;
        this.SKIP_TICKS = 1000 / this.FRAMES_PER_SECOND;
        this.next_game_tick = GetTickCount();
        // GetTickCount() returns the current number of milliseconds
        // that have elapsed since the system was started
        this.sleep_time = 0;
        this.game_is_running = true;
    }

    start() {
        while (game_is_running) {
            update_game();
            display_game();

            next_game_tick += SKIP_TICKS;
            sleep_time = next_game_tick - GetTickCount();
            if (sleep_time >= 0) {
                Sleep(sleep_time);
            }
            else {
                // Shit, we are running behind!
            }
        }
    }

    stop() {

    }

    pause() {

    }
}

export { GameLoop };
