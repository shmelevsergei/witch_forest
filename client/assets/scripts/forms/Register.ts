import { _decorator, Component, Label, Node, SceneAsset } from "cc";
import { onChangeScene } from "../utils/changeScene";
const { ccclass, property } = _decorator;

@ccclass("Register")
export class Register extends Component {
	@property(Label) backButton: Label;
	@property(SceneAsset) changeScene: SceneAsset | null = null;

	start() {
		this.init();
	}

	init() {
		//При нажатии на кнопку назад
		this.onClickBackButton();
	}

	onClickBackButton() {
		this.backButton.node.on(
			Node.EventType.TOUCH_START,
			() => onChangeScene(this.changeScene.name),
			this
		);
	}
}
