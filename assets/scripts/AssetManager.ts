// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    url: string = 'http://127.0.0.1:8080/ui-prefab';

    @property([cc.Node])
    nodes: Array<cc.Node> = [];

    @property([cc.Label])
    labels: Array<cc.Label> = [];

    minFps = 60;

    // LIFE-CYCLE CALLBACKS:

    start () {
        
    }

    onClickLoad () {
        cc.assetManager.loadBundle(this.url, null, (err, bundle) => {
            cc.assetManager.cacheAsset = false;
            cc.assetManager.downloader['appendTimeStamp'] = true;
            cc.assetManager.presets['default'].maxConcurrency = 64;
            cc.assetManager.presets['default'].maxRequestsPerFrame = Number.MAX_VALUE;
            this.minFps = 60;
            let now = Date.now();
            bundle.load<cc.Prefab>('uiTest/prefab/gamePrefab', cc.Prefab, (err, prefab) => {
                let time = Date.now() - now;
                this.labels[0].string = time.toString() + 'ms\n';
                this.labels[0].string += this.minFps + 'fps';
                cc.assetManager.cacheAsset = true;
                cc.assetManager.downloader['appendTimeStamp'] = false;
                let node = cc.instantiate(prefab as cc.Prefab);
                node.parent = this.nodes[0];
            });
        });
    }

    onClickPreload () {
        cc.assetManager.loadBundle(this.url, null, (err, bundle) => {
            cc.assetManager.cacheAsset = false;
            cc.assetManager.downloader['appendTimeStamp'] = true;
            let now = Date.now();
            this.minFps = 60;
            bundle.preload('uiTest/prefab/gamePrefab', cc.Prefab, (err) => {
                let time = Date.now() - now;
                this.labels[1].string = time.toString() + 'ms\n';
                this.labels[1].string += this.minFps + 'fps';
                cc.assetManager.cacheAsset = true;
                cc.assetManager.downloader['appendTimeStamp'] = false;
                bundle.load('uiTest/prefab/gamePrefab', cc.Prefab, (err, prefab: cc.Prefab) => {
                    let node = cc.instantiate(prefab);
                    node.parent = this.nodes[1]
                })
            });
        });
    }

    update (dt) {
        let fps = 1 / dt;
        if (fps < this.minFps) this.minFps = fps;
    }

    onDestroy () {
    }
}
