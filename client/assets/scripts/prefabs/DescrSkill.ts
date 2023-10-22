import { _decorator, Button, Component, director, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("DescrSkill")
export class DescrSkill extends Component {
	start() {
		this.init();
	}

	init() {
		this.openModal();
	}

	openModal() {
		const button = this.node.getChildByName("Button");
		button.on(
			Node.EventType.TOUCH_START,
			() => {
				director.emit("OpenModal", null);
			},
			this
		);
	}

	getDesrc() {}
}
