import { _decorator, Component, math, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CameraMovement')
export class CameraMovement extends Component {
    @property(Vec3)
    cameraOffset: Vec3 = new Vec3(0, 0, 1000);
    @property(Node)
    targetNode : Node;

	protected lateUpdate(deltaTime: number): void {
		let temptraget = this.targetNode.getWorldPosition().clone().add(this.cameraOffset);
        this.node.position = Vec3.lerp(temptraget, this.node.position , temptraget, deltaTime * 5);
	}
}


