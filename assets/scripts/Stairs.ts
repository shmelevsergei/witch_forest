import { _decorator, BoxCollider2D, Collider2D, Component, Contact2DType, IPhysics2DContact, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Stairs')
export class Stairs extends Component {
    @property(Vec3)
    point : Vec3 = new Vec3(0, 0, 0);

    @property(Node)
    playerNode : Node = null;

    askWindow : Node = null;
    trigger : BoxCollider2D = null;

    Climb() {
        const newPoint = new Vec3(this.node.position.x + this.point.x, this.node.position.y + this.point.y, this.node.position.z + this.point.z)
        this.playerNode.setPosition(newPoint);
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


