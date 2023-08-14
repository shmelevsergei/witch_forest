import { _decorator, Component, director, Prefab, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("OpenModal")
export class OpenModal extends Component {
	@property(Node) closeButton: Node | null = null;
	start() {
		this.init();
	}

	init() {
		this.openModal();
		this.closeModal();
	}

	openModal() {
		director.on("OpenModal", this.onOpenModal, this);
	}

	closeModal() {
		this.closeButton.on(
			Node.EventType.TOUCH_START,
			() => (this.node.active = false),
			this
		);
	}

	onOpenModal() {
		this.node.active = true;
	}
	protected onDestroy(): void {
		director.off("OpenModal", this.onOpenModal, this);
	}
}
