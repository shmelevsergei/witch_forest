import { _decorator, BoxCollider2D, Collider2D, Component, Contact2DType, IPhysics2DContact, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Stairs')
export class Stairs extends Component {
    @property(Node)
    point : Node = null;

    @property(Node)
    playerNode : Node = null;

    askWindow : Node = null;
    trigger : BoxCollider2D = null;

    Climb() {
        const newPoint = new Vec3(this.node.getWorldPosition().x + this.point.position.x, this.node.getWorldPosition().y + this.point.position.y, this.node.getWorldPosition().z + this.point.position.z)
        this.playerNode.setWorldPosition(newPoint);
        console.log(newPoint);
        this.askWindow.active = false;
    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        this.askWindow.active = true;
    }

	onEndContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        this.askWindow.active = false;
    }

    start() {
        this.trigger = this.getComponent(BoxCollider2D);
        this.askWindow = this.node.getChildByName("AskWindow");

        this.trigger.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        this.trigger.on(Contact2DType.END_CONTACT, this.onEndContact, this);
    }

    update(deltaTime: number) {
        
    }
}


