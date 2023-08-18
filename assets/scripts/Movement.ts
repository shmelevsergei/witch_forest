import { _decorator, CCInteger, Component, input, Input, KeyCode, Node, RigidBody, RigidBody2D, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Movement')
export class Movement extends Component {
    @property(RigidBody2D)
    rb : RigidBody2D;
    @property(Node)
    cameraNode : Node;

    horizontalMove : number = 0;

    @property(CCInteger)
    speed : number = 1;

    onKeyDown(event) {
        switch (event.keyCode) {
            case KeyCode.ARROW_UP:
                break;
            case KeyCode.ARROW_RIGHT:
                this.horizontalMove = 1;
                break;
            case KeyCode.ARROW_LEFT:
                this.horizontalMove = -1;
                break;
        }
    }

    onKeyUp(event) {
        switch (event.keyCode) {
            case KeyCode.ARROW_UP:
                break;
            case KeyCode.ARROW_RIGHT:
                this.horizontalMove = 0;
                break;
            case KeyCode.ARROW_LEFT:
                this.horizontalMove = 0;
                break;
        }
    }

    start() {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    protected update(dt: number): void {
        this.rb.linearVelocity = new Vec2(this.horizontalMove * this.speed * dt, 0);
        this.cameraNode.position = new Vec3(this.node.position.x, this.node.position.y + 200, 1000);
    }
}


