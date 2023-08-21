import { _decorator, Component, Node } from "cc";
import { showHideModal } from "../utils/modal";
const { ccclass, property } = _decorator;

@ccclass("PlayerMenu")
export class PlayerMenu extends Component {
	start() {
		const closeButton: Node = this.node.getChildByName("CloseButton");

		closeButton.on(Node.EventType.TOUCH_START, this.onCloseButton, this);
	}
	onCloseButton() {
		showHideModal(this.node);
	}
}
