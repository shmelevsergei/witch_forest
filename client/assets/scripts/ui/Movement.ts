import { _decorator, Component, Input, Sprite } from "cc";
const { ccclass, property } = _decorator;

export let moveLeft: boolean = false;
export let moveRight: boolean = false;
export let moveTopRight: boolean = false;
export let moveTopLeft: boolean = false;

@ccclass("Movement")
export class Movement extends Component {
	@property(Sprite) leftButton: Sprite;
	@property(Sprite) rightButton: Sprite;
	@property(Sprite) topLeftButton: Sprite;
	@property(Sprite) topRightButton: Sprite;

	moveLeft: boolean = false;
	moveRight: boolean = false;
	moveTopRight: boolean = false;
	moveTopLeft: boolean = false;

	onTouchStartLeftButton() {
		this.moveLeft = true;
		moveLeft = this.moveLeft;
	}

	onTouchEndLeftButton() {
		this.moveLeft = false;
		moveLeft = this.moveLeft;
	}

	onTouchStartRightButton() {
		this.moveRight = true;
		moveRight = this.moveRight;
	}

	onTouchEndRightButton() {
		this.moveRight = false;
		moveRight = this.moveRight;
	}

	onTouchStartTopRightButton() {
		this.moveTopRight = true;
		moveTopRight = this.moveTopRight;
	}

	onTouchEndTopRightButton() {
		this.moveTopRight = false;
		moveTopRight = this.moveTopRight;
	}

	onTouchStartTopLeftButton() {
		this.moveTopLeft = true;
		moveTopLeft = this.moveTopLeft;
	}

	onTouchEndTopLeftButton() {
		this.moveTopLeft = false;
		moveTopLeft = this.moveTopLeft;
	}

	start() {
		this.leftButton.node.on(
			Input.EventType.TOUCH_START,
			this.onTouchStartLeftButton,
			this
		);
		this.leftButton.node.on(
			Input.EventType.TOUCH_END,
			this.onTouchEndLeftButton,
			this
		);

		this.rightButton.node.on(
			Input.EventType.TOUCH_START,
			this.onTouchStartRightButton,
			this
		);
		this.rightButton.node.on(
			Input.EventType.TOUCH_END,
			this.onTouchEndRightButton,
			this
		);

		this.topRightButton.node.on(
			Input.EventType.TOUCH_START,
			this.onTouchStartTopRightButton,
			this
		);
		this.topRightButton.node.on(
			Input.EventType.TOUCH_END,
			this.onTouchEndTopRightButton,
			this
		);

		this.topLeftButton.node.on(
			Input.EventType.TOUCH_START,
			this.onTouchStartTopLeftButton,
			this
		);
		this.topLeftButton.node.on(
			Input.EventType.TOUCH_END,
			this.onTouchEndTopLeftButton,
			this
		);
	}
}
