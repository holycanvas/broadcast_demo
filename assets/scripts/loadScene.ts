// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class DarkSlash extends cc.Component {

    loadDarkSlash () {
        cc.assetManager.loadBundle('http://127.0.0.1:8080/dark-slash', (err, bundle) => {
            bundle.loadScene('StartGame', (err, asset) => {
                cc.director.runSceneImmediate(asset);
            });
        })
    }

    loadLabelScene () {
        cc.director.loadScene('TTFLabelEffects');
    }

    loadGraphicsScene () {
        cc.director.loadScene('Ellipse');
    }
}
