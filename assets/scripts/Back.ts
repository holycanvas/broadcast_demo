// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    onLoad () {
        cc.game.addPersistRootNode(this.node);
        cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, () => {
            if (cc.director.getScene().name !== 'main') {
                this.getComponent<cc.Button>(cc.Button).interactable = true;
            }
            else {
                this.getComponent<cc.Button>(cc.Button).interactable = false;
            }
        })
    }

    onClick () {
        cc.director.loadScene('main');
    }
}
