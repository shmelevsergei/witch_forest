import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CameraMovement')
export class CameraMovement extends Component {
    @property(Vec3)
    cameraOffset: Vec3 = new Vec3(0, 0, 1000);
    @property(Node)
    targetNode : Node;
    start() {

    }

    update(deltaTime: number) {
		this.node.position = new Vec3(this.targetNode.position.x + this.cameraOffset.x, this.targetNode.position.y + this.cameraOffset.y, this.cameraOffset.z);
    }
}


