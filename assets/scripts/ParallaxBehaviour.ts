import { _decorator, CCBoolean, CCFloat, CCInteger, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ParallaxBehaviour')
export class ParallaxBehaviour extends Component {
    @property(Node)
    followingTarget : Node = null;
    @property({type : CCFloat, range : [0, 1, 0.1]})
    parallaxFactor : number = 0;
    @property(CCBoolean)
    disableVerticalParallax : boolean = true;
    
    targetPreviousPosition : Vec3 = null;


    start() {
        this.targetPreviousPosition = this.followingTarget.getWorldPosition();
    }

    update(deltaTime: number) {
        let delta = this.followingTarget.getWorldPosition().subtract(this.targetPreviousPosition);
        this.targetPreviousPosition = this.followingTarget.getWorldPosition();
        if (this.disableVerticalParallax) {
            delta.y = 0;
        }
        this.node.setPosition(this.node.position.clone().add(delta.clone().multiplyScalar(this.parallaxFactor)));
        // this.node.position = new Vec3(this.node.position.clone().add(delta.clone().multiplyScalar(this.parallaxFactor)));
    }
}


