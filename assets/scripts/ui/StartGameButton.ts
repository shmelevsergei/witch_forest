import { _decorator, Component, Node, SceneAsset } from "cc";
const { ccclass, property } = _decorator;

import { onChangeScene } from "../utils/changeScene";

@ccclass("StartGameButton")
export class StartGameButton extends Component {
	@property(SceneAsset) public gameScene: SceneAsset;

	start() {
		this.node.on(Node.EventType.TOUCH_START, this.onTouchButton, this);
	}

	onTouchButton() {
		onChangeScene(this.gameScene.name);
	}
}
