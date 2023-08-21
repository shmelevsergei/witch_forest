import { _decorator, BlockInputEvents, Component, Node } from "cc";
import { showHideModal } from "../utils/modal";
const { ccclass, property } = _decorator;

@ccclass("GameMenu")
export class GameMenu extends Component {
	private playerMenu: Node;
	private blockInput: BlockInputEvents;
	onLoad() {
		this.blockInput = this.node
			.getChildByName("Wrapper")
			.getComponent(BlockInputEvents);
		this.playerMenu = this.node.getChildByName("PlayerMenu");
		this.playerMenu.active = false;
		this.blockInput.enabled = false;
	}

	start() {
		this.playerButton();
		console.log(this.blockInput.enabled);
	}

	playerButton(): void {
		const playerButton: Node = this.node
			.getChildByName("Wrapper")
			.getChildByName("Profile");

		playerButton.on(Node.EventType.TOUCH_START, () =>
			onClickPlayerButton()
		);
		const onClickPlayerButton = () => {
			showHideModal(this.playerMenu);
			this.blockInput.enabled = true;
			console.log(this.blockInput.enabled);
		};
	}
}
