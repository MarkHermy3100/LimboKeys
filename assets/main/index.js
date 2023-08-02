System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,p=t.Label,c=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[c.WHITE,c.BLACK,c.RED,c.GREEN,c.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=h(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(p);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=c.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?h(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=S;var x=h(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Shuffler.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Shuffler.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,o,s,i,r,a,h,u,c,l,p,y;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,o=e.initializerDefineProperty,s=e.assertThisInitialized},function(e){i=e.cclegacy,r=e._decorator,a=e.Node,h=e.AudioSource,u=e.AnimationClip,c=e.VideoPlayer,l=e.Vec3,p=e.Animation,y=e.Component}],execute:function(){var f,d,m,v,P,g,T,M,b,K,k,A,C,S,B,I;i._RF.push({},"ea9ab1ouYFNCa6oPF7X0Uv3","Shuffler",void 0);var E=r.ccclass,x=r.property,w=function(e){return e[e.TOP=240]="TOP",e[e.BOTTOM=-240]="BOTTOM",e[e.LEFT=-80]="LEFT",e[e.RIGHT=80]="RIGHT",e[e.DISTANCE=160]="DISTANCE",e}(w||{});e("Shuffler",(f=E("Shuffler"),d=x(a),m=x(h),v=x(a),P=x([a]),g=x([u]),T=x(c),f((K=t((b=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return t=e.call.apply(e,[this].concat(i))||this,o(t,"canvas",K,s(t)),o(t,"music",k,s(t)),o(t,"flash",A,s(t)),o(t,"speed",C,s(t)),o(t,"keys",S,s(t)),o(t,"keyAnim",B,s(t)),o(t,"ending",I,s(t)),t.patterns=[[2,4,1,3,6,8,5,7],[2,4,1,3,7,5,8,6],[3,1,4,2,6,8,5,7],[3,1,4,2,7,5,8,6],[2,4,1,6,3,8,5,7],[3,1,5,2,7,4,8,6],[2,1,4,3,6,5,8,7],[4,3,2,1,8,7,6,5],[3,4,5,6,7,8,2,1],[8,7,1,2,3,4,5,6],[1,3,2,5,4,7,8,6],[1,3,2,5,4,8,6,7],[4,2,6,1,7,3,8,5],[4,2,6,1,8,3,5,7],[2,4,6,1,8,3,7,5],[4,1,6,2,8,3,7,5],[2,3,1,5,4,7,6,8],[3,1,2,5,4,7,6,8]],t.patternHistory=[-1],t.specialPatterns=[[5,6,7,8,1,2,3,4],[8,7,6,5,4,3,2,1]],t.delay=7/6,t.chosen=Math.floor(8*Math.random()),t.activate=0,t.input=!1,t}n(t,e);var i=t.prototype;return i.isReversePattern=function(e,t){return-1==e||(e<=3?!(t>3)&&t!=e:e<=5?!(t<4||t>5)&&t!=e:e<=7?t==e:e<=9?!(t<8||t>9)&&t!=e:!(t<10)&&(e%2==0&&t==e+1))},i.shuffle=function(e){for(var t=e.length;t>=1;t--){var n=Math.floor(Math.random()*t);e.push(e.splice(n,1)[0])}return e},i.choosePattern=function(){for(var e=-1;this.isReversePattern(e,this.patternHistory[this.patternHistory.length-1]);)switch(Math.floor(6*Math.random())){case 0:e=Math.floor(4*Math.random());break;case 1:e=4+Math.floor(2*Math.random());break;case 2:e=6;break;case 3:e=7;break;case 4:e=8+Math.floor(2*Math.random());break;case 5:e=10+Math.floor(8*Math.random())}return this.patternHistory.push(e),e},i.onLoad=function(){for(var e=this,t=this.shuffle([1,2,3,4,5,6,7,8]),n=function(n){e.keys[n].on(a.EventType.TOUCH_START,(function(){var o;e.input&&(e.flash.active=!0,null==(o=e.flash.getComponent(p))||o.play("color"+t[n]+"_bg"),e.input=!1,e.schedule((function(){n==e.chosen?e.ending.remoteURL="video/right_key.mp4":e.ending.remoteURL="video/wrong_key.mp4",e.ending.play()}),0,0,.6))}))},o=0;o<8;o++)n(o);for(var s=1;s<=5;s++)this.schedule((function(){for(var t=e.choosePattern(),n=1;n<=8;n++)e.moveKey(e.getKeyByPos(n),n,e.patterns[t][n-1],e.speed,0,0)}),0,0,this.delay+1.5*s/this.speed);this.schedule((function(){for(var t=Math.floor(2*Math.random()),n=1;n<=8;n++)n<=4?e.moveKey(e.getKeyByPos(n),n,e.specialPatterns[0][n-1],e.speed/2.75,t,0):e.moveKey(e.getKeyByPos(n),n,e.specialPatterns[0][n-1],e.speed/2.75,t-1,0)}),0,0,this.delay+1.5/this.speed*6);for(var i=7;i<=9;i++)this.schedule((function(){for(var t=e.choosePattern(),n=1;n<=8;n++)e.moveKey(e.getKeyByPos(n),n,e.patterns[t][n-1],e.speed,0,0)}),0,0,this.delay+1.5*i/this.speed+1.5/this.speed);this.schedule((function(){for(var t=2*Math.floor(2*Math.random())-1,n=1;n<=8;n++)n<=2?e.moveKey(e.getKeyByPos(n),n,e.specialPatterns[1][n-1],e.speed/2.75,t>0?t:0,t):n<=6?e.moveKey(e.getKeyByPos(n),n,e.specialPatterns[1][n-1],e.speed/2.75,t,t):e.moveKey(e.getKeyByPos(n),n,e.specialPatterns[1][n-1],e.speed/2.75,t<0?t:0,t)}),0,0,this.delay+1.5/this.speed*11);for(var r=11;r<=15;r++)this.schedule((function(){for(var t=e.choosePattern(),n=1;n<=8;n++)e.moveKey(e.getKeyByPos(n),n,e.patterns[t][n-1],e.speed,0,0)}),0,0,this.delay+1.5*r/this.speed+1.5/this.speed*2);this.speed*=1.2;for(var h=16;h<=18;h++)this.schedule((function(){for(var t=e.choosePattern(),n=1;n<=8;n++)e.moveKey(e.getKeyByPos(n),n,e.patterns[t][n-1],e.speed,0,0)}),0,0,this.delay+1.5*h/this.speed+1.5/this.speed*18*1.2-1.5/this.speed*16);this.schedule((function(){for(var t=2*Math.floor(2*Math.random())-1,n=1;n<=8;n++)n<=2?e.moveKey(e.getKeyByPos(n),n,e.specialPatterns[1][n-1],e.speed/2.75,t>0?t:0,t):n<=6?e.moveKey(e.getKeyByPos(n),n,e.specialPatterns[1][n-1],e.speed/2.75,t,t):e.moveKey(e.getKeyByPos(n),n,e.specialPatterns[1][n-1],e.speed/2.75,t<0?t:0,t)}),0,0,this.delay+1.5/this.speed*18*1.2+1.5/this.speed*3);for(var u=20;u<=26;u++)this.schedule((function(){for(var t=e.choosePattern(),n=1;n<=8;n++)e.moveKey(e.getKeyByPos(n),n,e.patterns[t][n-1],e.speed,0,0)}),0,0,this.delay+1.5*u/this.speed+1.5/this.speed*18*1.2-1.5/this.speed*15);this.schedule((function(){for(var n=function(n){e.schedule((function(){var o,s;e.rotateAnim(e.keys[n],.5),e.keys[n].addComponent(p),null==(o=e.keys[n].getComponent(p))||o.createState(e.keyAnim[t[n]]),null==(s=e.keys[n].getComponent(p))||s.play(e.keyAnim[t[n]].name)}),0,0,n/15)},o=0;o<8;o++)n(o)}),0,0,this.delay+1.5/this.speed*18*1.2+1.5/this.speed*12),this.schedule((function(){e.input=!0}),0,0,this.delay+1.5/this.speed*18*1.2+1.5/this.speed*16)},i.numToVec=function(e){return new l(w.RIGHT-e%2*w.DISTANCE,w.TOP-Math.floor((e-1)/2)*w.DISTANCE,0)},i.vecToNum=function(e){return(w.TOP-e.y)/w.DISTANCE*2-(w.RIGHT-e.x)/w.DISTANCE+2},i.getKeyByPos=function(e){for(var t=0;t<8;t++)if(this.vecToNum(this.keys[t].position)==e)return this.keys[t];return this.keys[-1]},i.moveKey=function(e,t,n,o,s,i){var r=this;if(0==s)for(var a=this.numToVec(n).x-this.numToVec(t).x,h=this.numToVec(n).y-this.numToVec(t).y,u=0;u<w.DISTANCE;u++)this.schedule((function(){e.setPosition(e.position.x+a/w.DISTANCE,e.position.y+h/w.DISTANCE)}),0,0,u/w.DISTANCE/o);else{var c=new l((this.numToVec(n).x+this.numToVec(t).x)/2,(this.numToVec(n).y+this.numToVec(t).y)/2),p=this.numToVec(t),y=(p.x-c.x)*(p.x-c.x)+(p.y-c.y)*(p.y-c.y),f=Math.acos((p.x-c.x)/Math.sqrt(y));p.y<c.y&&(f=2*Math.PI-f);for(var d=1;d<=180;d++)this.schedule((function(){f+=s*Math.PI/180,e.setPosition(c.x+Math.sqrt(y)*Math.cos(f),c.y+Math.sqrt(y)*Math.sin(f))}),0,0,d/180/o);this.schedule((function(){e.setPosition(Math.round(e.position.x),Math.round(e.position.y))}),0,0,1/o+1/360)}if(0!=i)for(var m=e.rotation.z,v=function(t){r.schedule((function(){e.setRotationFromEuler(0,0,180*m+t*i)}),0,0,t/180/o)},P=1;P<=180;P++)v(P)},i.rotateAnim=function(e,t){for(var n=this,o=function(o){n.schedule((function(){e.setRotationFromEuler(0,0,360*Math.pow(o/200-1,4))}),0,0,o/200*t)},s=1;s<=200;s++)o(s);this.schedule((function(){e.setRotationFromEuler(0,0,0)}),0,0,t+1/360)},i.update=function(e){var t,n;0==this.activate&&(this.activate++,this.keys[this.chosen].addComponent(p),null==(t=this.keys[this.chosen].getComponent(p))||t.createState(this.keyAnim[0]),null==(n=this.keys[this.chosen].getComponent(p))||n.play("glow_green"))},t}(y)).prototype,"canvas",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=t(b.prototype,"music",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=t(b.prototype,"flash",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=t(b.prototype,"speed",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),S=t(b.prototype,"keys",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),B=t(b.prototype,"keyAnim",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),I=t(b.prototype,"ending",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=b))||M));i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});