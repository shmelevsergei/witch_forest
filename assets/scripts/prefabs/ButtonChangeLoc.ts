import { _decorator, Component, Node, SceneAsset } from "cc";
import { onChangeScene } from "../utils/changeScene";
const { ccclass, property } = _decorator;

@ccclass("ButtonChangeLoc")
export class ButtonChangeLoc extends Component {
	@property(SceneAsset) changeScene: SceneAsset;

	start() {
		this.init();
	}

	init() {
		this.node.on(
			Node.EventType.TOUCH_START,
			() => onChangeScene(this.changeScene.name),
			this
		);
	}
}
