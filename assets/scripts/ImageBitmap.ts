// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    url: string = 'http://127.0.0.1:8080/big-picture.jpg?t=';

    @property([cc.Sprite])
    sprites: Array<cc.Sprite> = [];

    @property([cc.Label])
    labels: Array<cc.Label> = [];

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    onClickImage () {
        cc.macro.ALLOW_IMAGE_BITMAP = false;
        let now = Date.now();
        let count = 0;
        for (let i = 0; i < 10; i++) {
            cc.assetManager.loadRemote<cc.Texture2D>(this.url + Date.now(), null, (err, texture) => {
                count++;
                if (count === 9) {
                    this.sprites[0].spriteFrame = new cc.SpriteFrame(texture);
                    this.labels[0].string = (Date.now() - now).toString() + 'ms';
                }
            });
        }
    }

    onClickBitmapImage () {
        cc.macro.ALLOW_IMAGE_BITMAP = true;
        let now = Date.now();
        let count = 0;
        for (let i = 0; i < 10; i++) {
            cc.assetManager.loadRemote<cc.Texture2D>(this.url + Date.now(), null, (err, texture) => {
                count++;
                if (count === 9) {
                    this.sprites[1].spriteFrame = new cc.SpriteFrame(texture);
                    this.labels[1].string = (Date.now() - now).toString() + 'ms';
                }
            });
        }
    }

    onDestroy () {
        cc.macro.ALLOW_IMAGE_BITMAP = true;
    }

    // update (dt) {}
}
