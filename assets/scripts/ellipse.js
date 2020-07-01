window.devicePixelRatio = 1;

cc.Class({
    extends: cc.Component,

    // use this for initialization
    onLoad: function () {
        var g = this.getComponent(cc.Graphics);

        g.lineWidth = 100;

        g.circle(0, 0, 100);

        g.stroke();
        g.fill();
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
