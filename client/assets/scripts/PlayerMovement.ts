import { PhysicsSystem2D } from "cc";
import { BoxCollider2D } from "cc";
import {
	_decorator,
	CCInteger,
	CircleCollider2D,
	Component,
	input,
	Input,
	KeyCode,
	RigidBody2D,
	Vec2,
	Vec3,
} from "cc";

const { ccclass, property } = _decorator;

import { moveLeft, moveTopLeft, moveRight, moveTopRight } from "./ui/Movement";

@ccclass("PlayerMovement")
export class PlayerMovement extends Component {
	@property(RigidBody2D) rb: RigidBody2D;

	playerCollider: CircleCollider2D;

	@property(BoxCollider2D)
	footTrigger: BoxCollider2D;

	horizontalMove: number = 0;

	@property(CCInteger)
	speed: number = 1;
	@property(CCInteger)
	jumpStrength: number = 50;

	onGround: boolean = false;

	start() {
		input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
		input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
	}

	onKeyDown(event) {
		switch (event.keyCode) {
			case KeyCode.ARROW_UP:
				this.Jump();
				break;
			case KeyCode.ARROW_RIGHT:
				this.horizontalMove = 1;
				this.node.setScale(new Vec3(1, 1, 1));
				break;
			case KeyCode.ARROW_LEFT:
				this.horizontalMove = -1;
				this.node.setScale(new Vec3(-1, 1, 1));
				break;
			case KeyCode.KEY_Z:
				if (this.speed == 500) {
					this.speed = 1500;
				} else if (this.speed == 1500) {
					this.speed = 500;
				} else {
					this.speed = 500;
				}
				break;
		}
	}

	onKeyUp(event) {
		switch (event.keyCode) {
			case KeyCode.ARROW_UP:
				break;
			case KeyCode.ARROW_RIGHT:
				this.horizontalMove = 0;
				break;
			case KeyCode.ARROW_LEFT:
				this.horizontalMove = 0;
				break;
		}
	}

	Jump() {
		if (this.onGround == true) {
			this.rb.applyLinearImpulse(
				new Vec2(0, this.jumpStrength),
				new Vec2(this.node.position.x, this.node.position.y),
				true
			);
		}
	}

	protected update(dt: number): void {
		this.rb.linearVelocity = new Vec2(
			this.horizontalMove * this.speed * dt,
			this.rb.linearVelocity.y
		);
		this.onGround = this.CheckOnGround();

		if (moveLeft) {
			this.horizontalMove = -1;
			this.node.setScale(new Vec3(-1, 1, 1));
		} else if (moveRight) {
			this.horizontalMove = 1;
			this.node.setScale(new Vec3(1, 1, 1));
		} else if (moveTopLeft) {
			this.horizontalMove = -1;
			this.node.setScale(new Vec3(-1, 1, 1));
			this.Jump();
		} else if (moveTopRight) {
			this.horizontalMove = 1;
			this.node.setScale(new Vec3(1, 1, 1));
			this.Jump();
		} else {
			this.horizontalMove = 0;
		}
	}

	CheckOnGround() {
		let result = false;
		if (this.footTrigger) {
			const colliderList = PhysicsSystem2D.instance.testAABB(
				this.footTrigger.worldAABB
			);
			colliderList.forEach((collider) => {
				if (collider.tag === 1) {
					result = true;
				}
			});
		}
		return result;
	}
}