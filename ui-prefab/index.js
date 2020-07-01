window.__require=function t(e,n,s){function o(c,r){if(!n[c]){if(!e[c]){var a=c.split("/");if(a=a[a.length-1],!e[a]){var h="function"==typeof __require&&__require;if(!r&&h)return h(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+c+"'")}c=a}var u=n[c]={exports:{}};e[c][0].call(u.exports,function(t){return o(e[c][1][t]||t)},u,u.exports,t,e,n,s)}return n[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<s.length;c++)o(s[c]);return o}({BackPackUI:[function(t,e,n){"use strict";cc._RF.push(e,"96a192UeP9FDZ6jqVOqcUAs","BackPackUI"),cc.Class({extends:cc.Component,properties:{slotPrefab:{default:null,type:cc.Prefab},scrollView:{default:null,type:cc.ScrollView},totalCount:0},init:function(t){this.heroSlots=[],this.home=t;for(var e=0;e<this.totalCount;++e){var n=this.addHeroSlot();this.heroSlots.push(n)}},addHeroSlot:function(){var t=cc.instantiate(this.slotPrefab);return this.scrollView.content.addChild(t),t},show:function(){this.node.active=!0,this.node.emit("fade-in"),this.home.toggleHomeBtns(!1)},hide:function(){this.node.emit("fade-out"),this.home.toggleHomeBtns(!0)}}),cc._RF.pop()},{}],ButtonScaler:[function(t,e,n){"use strict";cc._RF.push(e,"f5d10E3oQ9G/LlvNZly0S2Y","ButtonScaler"),cc.Class({extends:cc.Component,properties:{pressedScale:1,transDuration:0},onLoad:function(){var t=this;function e(e){this.stopAllActions(),this.runAction(t.scaleUpAction)}t.initScale=this.node.scale,t.button=t.getComponent(cc.Button),t.scaleDownAction=cc.scaleTo(t.transDuration,t.pressedScale),t.scaleUpAction=cc.scaleTo(t.transDuration,t.initScale),this.node.on("touchstart",function(e){this.stopAllActions(),this.runAction(t.scaleDownAction)},this.node),this.node.on("touchend",e,this.node),this.node.on("touchcancel",e,this.node)}}),cc._RF.pop()},{}],ChargeUI:[function(t,e,n){"use strict";cc._RF.push(e,"11f1epEd5FProshh8dSXgPW","ChargeUI"),cc.Class({extends:cc.Component,properties:{},init:function(t,e){this.home=t,this.parentBtns=e},show:function(){this.node.active=!0,this.node.emit("fade-in"),this.home.toggleHomeBtns(!1),this.parentBtns.pauseSystemEvents()},hide:function(){this.node.emit("fade-out"),this.home.toggleHomeBtns(!0),this.parentBtns.resumeSystemEvents()}}),cc._RF.pop()},{}],EnergyCounter:[function(t,e,n){"use strict";cc._RF.push(e,"70152iIQt1AkKnsFXGgadR8","EnergyCounter"),cc.Class({extends:cc.Component,properties:{timeToRecover:0,totalCount:0,currentCount:0,labelTimer:{default:null,type:cc.Label},labelCount:{default:null,type:cc.Label},progressBar:{default:null,type:cc.ProgressBar}},onLoad:function(){this.timer=0},update:function(t){var e=this.timer/this.timeToRecover;this.progressBar.progress=e,this.currentCount>this.totalCount&&(this.currentCount=this.totalCount);var n=Math.floor(this.timeToRecover-this.timer);this.labelCount.string=this.currentCount+"/"+this.totalCount,this.labelTimer.string=Math.floor(n/60).toString()+":"+(n%60<10?"0":"")+n%60,this.timer+=t,this.timer>=this.timeToRecover&&(this.timer=0,this.currentCount++)}}),cc._RF.pop()},{}],HeroSlot:[function(t,e,n){"use strict";cc._RF.push(e,"648ecAs4bREAJsQ6IycZbX7","HeroSlot");var s=function(t,e){var n=Math.random();return t+Math.floor((e-t)*n)};cc.Class({extends:cc.Component,properties:{sfAttributes:{default:[],type:cc.SpriteFrame},sfRanks:{default:[],type:cc.SpriteFrame},sfHeroes:{default:[],type:cc.SpriteFrame},sfBorders:{default:[],type:cc.SpriteFrame},labelLevel:{default:null,type:cc.Label},spHero:{default:null,type:cc.Sprite},spRank:{default:null,type:cc.Sprite},spAttribute:{default:null,type:cc.Sprite},spBorder:{default:null,type:cc.Sprite},spStars:{default:[],type:cc.Sprite}},onLoad:function(){this.refresh()},refresh:function(){var t=s(0,this.sfBorders.length),e=s(0,this.sfHeroes.length),n=s(0,this.spStars.length),o=s(0,this.sfRanks.length),i=s(0,this.sfAttributes.length),c=s(0,100);this.labelLevel.string="LV."+c,this.spRank.spriteFrame=this.sfRanks[o],this.refreshStars(n),this.spBorder.spriteFrame=this.sfBorders[t],this.spAttribute.spriteFrame=this.sfAttributes[i],this.spHero.spriteFrame=this.sfHeroes[e]},refreshStars:function(t){for(var e=0;e<this.spStars.length;++e)this.spStars[e].enabled=e<=t}}),cc._RF.pop()},{}],HomeUI:[function(t,e,n){"use strict";cc._RF.push(e,"80382PDGl1Jf4nvzaq1gyOV","HomeUI");var s=t("BackPackUI"),o=t("ShopUI"),i=cc.Enum({Home:-1,Shop:-1});cc.Class({extends:cc.Component,properties:{menuAnim:{default:null,type:cc.Animation},homeBtnGroups:{default:[],type:cc.Node},backPackUI:{default:null,type:s},shopUI:o},onLoad:function(){this.curPanel=i.Home,this.menuAnim.play("menu_reset")},start:function(){this.backPackUI.init(this),this.shopUI.init(this,i.Shop),this.scheduleOnce(function(){this.menuAnim.play("menu_intro"),this.showAllUI()}.bind(this),.5)},showAllUI:function(){this.gotoShop(),this.homeBtnGroups[0].getChildByName("sub_btns").getComponent("SubBtnsUI").showSubBtns(),this.node.parent.getChildByName("chargePanel").getComponent("ChargeUI").show(),this.node.parent.getChildByName("backPack").getComponent("BackPackUI").show()},toggleHomeBtns:function(t){for(var e=0;e<this.homeBtnGroups.length;++e){var n=this.homeBtnGroups[e];t?n.resumeSystemEvents(!0):n.pauseSystemEvents(!0)}},gotoShop:function(){this.curPanel!==i.Shop&&this.shopUI.show()},gotoHome:function(){this.curPanel===i.Shop&&(this.shopUI.hide(),this.curPanel=i.Home)}}),cc._RF.pop()},{BackPackUI:"BackPackUI",ShopUI:"ShopUI"}],PanelTransition:[function(t,e,n){"use strict";cc._RF.push(e,"e5284RIOh1C4Jyzfa64lV9l","PanelTransition"),cc.Class({extends:cc.Component,properties:{duration:0},onLoad:function(){this.outOfWorld=cc.v2(3e3,0),this.node.position=this.outOfWorld;var t=cc.callFunc(this.onFadeOutFinish,this),e=cc.callFunc(this.onFadeInFinish,this);this.actionFadeIn=cc.sequence(cc.spawn(cc.fadeTo(this.duration,255),cc.scaleTo(this.duration,1)),e),this.actionFadeOut=cc.sequence(cc.spawn(cc.fadeTo(this.duration,0),cc.scaleTo(this.duration,2)),t),this.node.on("fade-in",this.startFadeIn,this),this.node.on("fade-out",this.startFadeOut,this)},startFadeIn:function(){this.node.pauseSystemEvents(!0),this.node.position=cc.v2(0,0),this.node.setScale(2),this.node.opacity=0,this.node.runAction(this.actionFadeIn)},startFadeOut:function(){this.node.pauseSystemEvents(!0),this.node.runAction(this.actionFadeOut)},onFadeInFinish:function(){this.node.resumeSystemEvents(!0)},onFadeOutFinish:function(){this.node.position=this.outOfWorld}}),cc._RF.pop()},{}],ShopUI:[function(t,e,n){"use strict";cc._RF.push(e,"b06f068UltB3KPTKgJesZOm","ShopUI");var s=t("ChargeUI");cc.Class({extends:cc.Component,properties:{anim:cc.Animation,figure:cc.Sprite,btnsNode:cc.Node,chargeUI:s},init:function(t,e){this.home=t,this.node.active=!1,this.anim.play("shop_reset"),this.panelType=e,this.figure.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(1,1,.96),cc.scaleTo(1,1,1)))),this.chargeUI.init(t,this.btnsNode)},show:function(){this.node.active=!0,this.anim.play("shop_intro")},hide:function(){this.anim.play("shop_outro")},onFinishShow:function(){this.home.curPanel=this.panelType},onFinishHide:function(){this.node.active=!1}}),cc._RF.pop()},{ChargeUI:"ChargeUI"}],SubBtnsUI:[function(t,e,n){"use strict";cc._RF.push(e,"6907fq75H1EIrLmj/AFBg+B","SubBtnsUI"),cc.Class({extends:cc.Component,properties:{subBtnsAnim:cc.Animation,btnShowSub:cc.Button,btnHideSub:cc.Button,btnContainer:cc.Node},onLoad:function(){this.btnShowSub.node.active=!0,this.btnHideSub.node.active=!1},showSubBtns:function(){this.btnContainer.active=!0,this.subBtnsAnim.play("sub_pop")},hideSubBtns:function(){this.subBtnsAnim.play("sub_fold")},onFinishAnim:function(t){this.btnShowSub.node.active=t,this.btnHideSub.node.active=!t}}),cc._RF.pop()},{}]},{},["BackPackUI","ButtonScaler","ChargeUI","EnergyCounter","HeroSlot","HomeUI","PanelTransition","ShopUI","SubBtnsUI"]);