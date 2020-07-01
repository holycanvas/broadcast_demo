// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property([cc.Node])
    labels: cc.Node[] = [];
    _opacity: number = 0;

    update (dt) {
        this._opacity += dt * 100;
        this._opacity %= 256;
        this.labels && this.labels.forEach(label => {
            label.opacity = this._opacity;
        });
    }
}
