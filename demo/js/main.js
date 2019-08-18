window.addEventListener("load", () => {
    const game = new danmaku.Instance();
    const canvas = document.querySelector("canvas");
    game.setOutputCanvas(canvas);
    game.play();
});
