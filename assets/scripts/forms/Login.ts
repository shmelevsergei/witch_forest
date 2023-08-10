import { _decorator, Component, Label, Node, SceneAsset } from "cc";
import { onChangeScene } from "../utils/changeScene";
const { ccclass, property } = _decorator;

@ccclass("Register")
export class Register extends Component {
	@property(Label) registerButton: Label;
	@property(Node) loginButton: Node;
	@property(SceneAsset) SceneRegister: SceneAsset | null = null;
	@property(SceneAsset) SceneLogin: SceneAsset | null = null;

	start() {
		this.init();
	}

	init() {
		//При нажатии на кнопку регистрации
		this.clickRegisterButton();

		//При нажатии на кнопку входа
		this.clickLoginButton();
	}

	clickRegisterButton() {
		this.registerButton.node.on(
			Node.EventType.TOUCH_START,
			() => onChangeScene(this.SceneRegister.name),
			this
		);
	}

	clickLoginButton() {
		this.loginButton.on(
			Node.EventType.TOUCH_START,
			() => onChangeScene(this.SceneLogin.name),
			this
		);
	}
}
