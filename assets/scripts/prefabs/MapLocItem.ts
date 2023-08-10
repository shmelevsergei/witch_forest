import { _decorator, CCString, Component, Label, Node, tween, Vec3 } from "cc";
import { onChangeScene } from "../utils/changeScene";
const { ccclass, property } = _decorator;

@ccclass("MapLocItem")
export class MapLocItem extends Component {
	@property(Label) textButton: Label;
	@property(CCString) locationName: String | "" = "";

	start() {
		this.init();
	}

	onLoad() {
		//При наведении
		this.onMoveItem();

		//При отведении
		this.onLeaveItem();
	}

	init() {
		// При клике на объект переходим на сцену
		this.onClickItem();
	}

	onClickItem() {
		this.node.on(
			Node.EventType.TOUCH_START,
			() => onChangeScene(this.locationName),
			this
		);
	}

	onMoveItem() {
		this.textButton.node.on(
			Node.EventType.MOUSE_ENTER,
			() => enterAnimation(),
			this
		);

		const enterAnimation = () => {
			tween(this.textButton.node)
				.to(0.3, { scale: new Vec3(0.6, 0.6, 1) }, { easing: "linear" })
				.start();
		};
	}

	onLeaveItem() {
		this.textButton.node.on(
			Node.EventType.MOUSE_LEAVE,
			() => leaveAnimation(),
			this
		);
		const leaveAnimation = () => {
			tween(this.textButton.node)
				.to(0.3, { scale: new Vec3(0.5, 0.5, 1) }, { easing: "linear" })
				.start();
		};
	}
}
