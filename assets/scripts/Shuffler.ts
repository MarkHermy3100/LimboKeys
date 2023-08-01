
import { _decorator, Component, Node, Vec3, Animation, AnimationClip, EventTouch, AudioSource, VideoPlayer } from 'cc';
const { ccclass, property } = _decorator;

enum Defines {
    TOP = 240,
    BOTTOM = -240,
    LEFT = -80,
    RIGHT = 80,

    DISTANCE = 160
}

@ccclass('Shuffler')
export class Shuffler extends Component {
    @property(Node)
    private canvas: Node = null;

    @property(AudioSource)
    private music: AudioSource = null;

    @property(Node)
    private flash: Node = null;

    @property
    private speed: number = 5;

    @property([Node])
    private keys: Node[] = [];

    @property([AnimationClip])
    private keyAnim: AnimationClip[] = [];

    @property(VideoPlayer)
    private ending: VideoPlayer = null;

    private patterns: number[][] = 
    [[2, 4, 1, 3, 6, 8, 5, 7],
     [2, 4, 1, 3, 7, 5, 8, 6],
     [3, 1, 4, 2, 6, 8, 5, 7],
     [3, 1, 4, 2, 7, 5, 8, 6],  // 4 small rotations
     [2, 4, 1, 6, 3, 8, 5, 7],
     [3, 1, 5, 2, 7, 4, 8, 6],  // 2 big rotations
     [2, 1, 4, 3, 6, 5, 8, 7],  // Horizontal swaps
     [4, 3, 2, 1, 8, 7, 6, 5],  // Diagonal swaps
     [3, 4, 5, 6, 7, 8, 2, 1],
     [8, 7, 1, 2, 3, 4, 5, 6],  // Top/Bottom row pushes all keys
     [1, 3, 2, 5, 4, 7, 8, 6],
     [1, 3, 2, 5, 4, 8, 6, 7],
     [4, 2, 6, 1, 7, 3, 8, 5],
     [4, 2, 6, 1, 8, 3, 5, 7],
     [2, 4, 6, 1, 8, 3, 7, 5],
     [4, 1, 6, 2, 8, 3, 7, 5],
     [2, 3, 1, 5, 4, 7, 6, 8],
     [3, 1, 2, 5, 4, 7, 6, 8]]  // 8 shuffles

    private patternHistory: number[] = [-1];
    
    private specialPatterns: number[][] = 
    [[5, 6, 7, 8, 1, 2, 3, 4],  // Block swap
     [8, 7, 6, 5, 4, 3, 2, 1]]; // Circular rotation

    private delay: number = 7 / 6;

    private chosen = Math.floor(Math.random() * 8);

    private activate: number = 0;

    private input: boolean = false;

    isReversePattern(a: number, b: number): boolean {
        if (a == -1) {
            return true;
        }
        if (a <= 3) {
            if (b > 3) return false;
            return b != a;
        }
        else if (a <= 5) {
            if (b < 4 || b > 5) return false;
            return b != a;
        }
        else if (a <= 7) {
            return b == a;
        }
        else if (a <= 9) {
            if (b < 8 || b > 9) return false;
            return b != a;
        }
        else {
            if (b < 10) return false;
            return a % 2 == 0 && b == a + 1;
        }
        return false;
    }

    shuffle(arr: number[]): number[] {
        for (let i = arr.length; i >= 1; i--) {
            let roll = Math.floor(Math.random() * i);
            arr.push(arr.splice(roll, 1)[0]);
        }
        return arr;
    }

    choosePattern(): number {
        let rollPat = -1;
        let roll = -1;
        while (this.isReversePattern(roll, this.patternHistory[this.patternHistory.length - 1])) {
            rollPat = Math.floor(Math.random() * 6);
            switch (rollPat) {
                case 0:
                    roll = Math.floor(Math.random() * 4);
                    break;
                case 1:
                    roll = 4 + Math.floor(Math.random() * 2);
                    break;
                case 2:
                    roll = 6;
                    break;
                case 3:
                    roll = 7;
                    break;
                case 4:
                    roll = 8 + Math.floor(Math.random() * 2);
                    break;
                case 5:
                    roll = 10 + Math.floor(Math.random() * 8);
                    break;
            }
        }
        this.patternHistory.push(roll);
        return roll;
    }

    onLoad() {
        this.music.play();
        let col_ord = this.shuffle([1, 2, 3, 4, 5, 6, 7, 8]);

        this.canvas.on(Node.EventType.TOUCH_START, (event: EventTouch) => {
            if (this.input) {
                for (let i = 0; i < 8; i++) {
                    // HARDCODED VALUES. FIX THIS
                    if (Math.abs(event.getUILocation().x - 480 - this.keys[i].position.x) < 61 && Math.abs(event.getUILocation().y - 320 - this.keys[i].position.y) < 42) {
                        this.flash.active = true;
                        this.flash.getComponent(Animation)?.play("color" + col_ord[i] + "_bg");
                        this.input = false;
                        this.schedule(() => {
                            this.music.pause();
                            if (i == this.chosen)
                                this.ending.remoteURL = "video/right_key.mp4";
                            else
                                this.ending.remoteURL = "video/wrong_key.mp4";
                            this.ending.play();
                        }, 0, 0, 0.6);
                    }
                }
            }
        });

        for (let t = 1; t <= 5; t++) {
            this.schedule(() => {
                let roll = this.choosePattern();
                for (let i = 1; i <= 8; i++) {
                    this.moveKey(this.getKeyByPos(i), i, this.patterns[roll][i - 1], this.speed, 0, 0);
                }
            }, 0, 0, this.delay + t * 1.5 / this.speed);
        }

        this.schedule(() => {
            let direct = Math.floor(Math.random() * 2);
            for (let i = 1; i <= 8; i++) {
                if (i <= 4) {
                    this.moveKey(this.getKeyByPos(i), i, this.specialPatterns[0][i - 1], this.speed / 2.75, direct, 0);
                }
                else {
                    this.moveKey(this.getKeyByPos(i), i, this.specialPatterns[0][i - 1], this.speed / 2.75, direct - 1, 0);
                }
            }
        }, 0, 0, this.delay + 1.5 / this.speed * 6);

        for (let t = 7; t <= 9; t++) {
            this.schedule(() => {
                let roll = this.choosePattern();
                for (let i = 1; i <= 8; i++) {
                    this.moveKey(this.getKeyByPos(i), i, this.patterns[roll][i - 1], this.speed, 0, 0);
                }
            }, 0, 0, this.delay + t * 1.5 / this.speed + 1.5 / this.speed);
        }

        this.schedule(() => {
            let direct = Math.floor(Math.random() * 2) * 2 - 1;
            for (let i = 1; i <= 8; i++) {
                if (i <= 2) {
                    this.moveKey(this.getKeyByPos(i), i, this.specialPatterns[1][i - 1], this.speed / 2.75, direct > 0 ? direct : 0, direct);
                }
                else if (i <= 6) {
                    this.moveKey(this.getKeyByPos(i), i, this.specialPatterns[1][i - 1], this.speed / 2.75, direct, direct);
                }
                else {
                    this.moveKey(this.getKeyByPos(i), i, this.specialPatterns[1][i - 1], this.speed / 2.75, direct < 0 ? direct : 0, direct);
                }
            }
        }, 0, 0, this.delay + 1.5 / this.speed * 11);

        for (let t = 11; t <= 15; t++) {
            this.schedule(() => {
                let roll = this.choosePattern();
                for (let i = 1; i <= 8; i++) {
                    this.moveKey(this.getKeyByPos(i), i, this.patterns[roll][i - 1], this.speed, 0, 0);
                }
            }, 0, 0, this.delay + t * 1.5 / this.speed + 1.5 / this.speed * 2);
        }

        this.speed *= 1.2;

        for (let t = 16; t <= 18; t++) {
            this.schedule(() => {
                let roll = this.choosePattern();
                for (let i = 1; i <= 8; i++) {
                    this.moveKey(this.getKeyByPos(i), i, this.patterns[roll][i - 1], this.speed, 0, 0);
                }
            }, 0, 0, this.delay + t * 1.5 / this.speed + 1.5 / this.speed * 18 * 1.2 - 1.5 / this.speed * 16);
        }

        this.schedule(() => {
            let direct = Math.floor(Math.random() * 2) * 2 - 1;
            for (let i = 1; i <= 8; i++) {
                if (i <= 2) {
                    this.moveKey(this.getKeyByPos(i), i, this.specialPatterns[1][i - 1], this.speed / 2.75, direct > 0 ? direct : 0, direct);
                }
                else if (i <= 6) {
                    this.moveKey(this.getKeyByPos(i), i, this.specialPatterns[1][i - 1], this.speed / 2.75, direct, direct);
                }
                else {
                    this.moveKey(this.getKeyByPos(i), i, this.specialPatterns[1][i - 1], this.speed / 2.75, direct < 0 ? direct : 0, direct);
                }
            }
        }, 0, 0, this.delay + 1.5 / this.speed * 18 * 1.2 + 1.5 / this.speed * 3);

        for (let t = 20; t <= 26; t++) {
            this.schedule(() => {
                let roll = this.choosePattern();
                for (let i = 1; i <= 8; i++) {
                    this.moveKey(this.getKeyByPos(i), i, this.patterns[roll][i - 1], this.speed, 0, 0);
                }
            }, 0, 0, this.delay + t * 1.5 / this.speed + 1.5 / this.speed * 18 * 1.2 - 1.5 / this.speed * 15);
        }
        this.schedule(() => {
            for (let i = 0; i < 8; i++) {
                this.schedule(() => {
                    this.rotateAnim(this.keys[i], 0.5);
                    this.keys[i].addComponent(Animation);
                    this.keys[i].getComponent(Animation)?.createState(this.keyAnim[col_ord[i]]);
                    this.keys[i].getComponent(Animation)?.play(this.keyAnim[col_ord[i]].name);
                }, 0, 0, i / 15);
            }
        }, 0, 0, this.delay + 1.5 / this.speed * 18 * 1.2 + 1.5 / this.speed * 12);
        this.schedule(() => {
            this.input = true;
        }, 0, 0, this.delay + 1.5 / this.speed * 18 * 1.2 + 1.5 / this.speed * 16);
    }

    numToVec(n: number): Vec3 {
        return new Vec3(Defines.RIGHT - (n % 2) * Defines.DISTANCE, Defines.TOP - Math.floor((n - 1) / 2) * Defines.DISTANCE, 0)
    }

    vecToNum(v: Vec3): number {
        return (Defines.TOP - v.y) / Defines.DISTANCE * 2 - (Defines.RIGHT - v.x) / Defines.DISTANCE + 2;
    }

    getKeyByPos(n: number): Node {
        for (let i = 0; i < 8; i++) {
            if (this.vecToNum(this.keys[i].position) == n) {
                return this.keys[i];
            }
        }
        return this.keys[-1];
    }

    moveKey(key: Node, pos: number, aftPos: number, speed: number, circ_direct: number, rotate: number): void {
        if (circ_direct == 0) {
            let dx = this.numToVec(aftPos).x - this.numToVec(pos).x;
            let dy = this.numToVec(aftPos).y - this.numToVec(pos).y;

            for (let i = 0; i < Defines.DISTANCE; i++) {
                this.schedule(() => {
                    key.setPosition(key.position.x + dx / Defines.DISTANCE, key.position.y + dy / Defines.DISTANCE);
                }, 0, 0, i / Defines.DISTANCE / speed);
            }
        }
        else {
            let center = new Vec3((this.numToVec(aftPos).x + this.numToVec(pos).x) / 2, (this.numToVec(aftPos).y + this.numToVec(pos).y) / 2);
            let coor = this.numToVec(pos);
            let R2 = (coor.x - center.x) * (coor.x - center.x) + (coor.y - center.y) * (coor.y - center.y);
            let theta = Math.acos((coor.x - center.x) / Math.sqrt(R2));
            if (coor.y < center.y) {
                theta = 2 * Math.PI - theta;
            }
            for (let i = 1; i <= 180; i++) {
                this.schedule(() => {
                    theta += circ_direct * Math.PI / 180;
                    key.setPosition(center.x + Math.sqrt(R2) * Math.cos(theta), center.y + Math.sqrt(R2) * Math.sin(theta));
                }, 0, 0, i / 180 / speed);
            }
            this.schedule(() => {
                key.setPosition(Math.round(key.position.x), Math.round(key.position.y));
            }, 0, 0, 1 / speed + 1 / 360);
        }

        if (rotate != 0) {
            let initialAngle = key.rotation.z;
            for (let i = 1; i <= 180; i++) {
                this.schedule(() => {
                    key.setRotationFromEuler(0, 0, 180 * initialAngle + i * rotate);
                }, 0, 0, i / 180 / speed);
            }
        }
    }

    rotateAnim(key: Node, duration: number) {
        let lim = 200;
        for (let i = 1; i <= lim; i++) {
            this.schedule(() => {
                key.setRotationFromEuler(0, 0, 360 * Math.pow(i / lim - 1, 4));
            }, 0, 0, i / lim * duration);
        }
        this.schedule(() => {
            key.setRotationFromEuler(0, 0, 0);
        }, 0, 0, duration + 1 / 360);
    }

    update(dt: number) {
        if (this.activate == 0) {
            this.activate++;
            this.keys[this.chosen].addComponent(Animation);
            this.keys[this.chosen].getComponent(Animation)?.createState(this.keyAnim[0]);
            this.keys[this.chosen].getComponent(Animation)?.play("glow_green");
        }
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */
