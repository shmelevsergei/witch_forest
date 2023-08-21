import { _decorator, animation, AnimationClip, AnimationComponent, AnimationState, Component, Node } from 'cc';
import { PlayerMovement } from './PlayerMovement';
const { ccclass, property } = _decorator;

@ccclass('PlayerAnimation')
export class PlayerAnimation extends Component {

    @property(PlayerMovement)
    playerMovement : PlayerMovement;
    @property({type : AnimationComponent})
    animationComponent : AnimationComponent = null;

    playerMovementState : AnimationState;

    start() {
        this.animationComponent = this.getComponent(AnimationComponent);

        this.playerMovementState = this.animationComponent.getState("PlayerMovement");

        this.animationComponent.getState("PlayerMovement").wrapMode = AnimationClip.WrapMode.Loop;
        this.animationComponent.getState("PlayerMovement").repeatCount = Number.POSITIVE_INFINITY;
    }

    update(deltaTime: number) {
        if (this.playerMovement.horizontalMove == 0){
            // Play idle animation
            this.animationComponent.play("PlayerIdle");
        }
        else {
            // Play walk animation
            if (this.playerMovementState.isPlaying == false){
                this.animationComponent.play();
            }
        }
    }
}


