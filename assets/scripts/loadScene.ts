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

    loadLabelBlendFactor () {
        cc.director.loadScene('LabelBlendFactor');
    }

    loadLabelScene () {
        cc.director.loadScene('NativeLabel');
    }

    loadGraphicsScene () {
        cc.director.loadScene('Ellipse');
    }

    loadImageBitmap () {
        cc.director.loadScene('ImageBitmap');
    }

    loadSafeArea () {
        cc.director.loadScene('SafeArea');
    }

    loadGLTF () {
        cc.director.loadScene('GLTF');
    }

    loadAssetManager () {
        cc.director.loadScene('AssetManager');
    }
}
