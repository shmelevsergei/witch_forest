import { PhysicsSystem } from "cc";
import { PhysicsSystem2D } from "cc";
import { geometry } from "cc";
import { BoxCollider2D } from "cc";
import {
	_decorator,
	CCInteger,
	CircleCollider2D,
	Collider2D,
	Component,
	Contact2DType,
	ICollisionEvent,
	input,
	Input,
	IPhysics2DContact,
	KeyCode,
	Node,
	RigidBody2D,
	Vec2,
	Vec3,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("Movement")
export class Movement extends Component {
	@property(RigidBody2D)
	rb: RigidBody2D;
	playerCollider : CircleCollider2D;

	horizontalMove: number = 0;


	@property(CCInteger)
	speed: number = 1;
	@property(CCInteger)
	jumpStrength: number = 150;

	onGround: boolean = false;

	onKeyDown(event) {
		switch (event.keyCode) {
			case KeyCode.ARROW_UP:
				this.Jump();
				break;
			case KeyCode.ARROW_RIGHT:
				this.horizontalMove = 1;
				break;
			case KeyCode.ARROW_LEFT:
				this.horizontalMove = -1;
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
			this.rb.applyLinearImpulse(new Vec2(0, this.jumpStrength), new Vec2(this.node.position.x, this.node.position.y),true);
		}
	}

	onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        console.log('onBeginContact');
    }

	onEndContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        console.log('onBeginContact');
    }

	start() {
		input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
		input.on(Input.EventType.KEY_UP, this.onKeyUp, this);

		this.playerCollider = this.getComponent(CircleCollider2D);
    }

	protected update(dt: number): void {
		this.rb.linearVelocity = new Vec2(this.horizontalMove * this.speed * dt, this.rb.linearVelocity.y);
		this.onGround = this.CheckOnGround();
	} 


	CheckOnGround() {
			let result = false;
			if (this.playerCollider) {
				const colliderList = PhysicsSystem2D.instance.testAABB(this.playerCollider.worldAABB);
				colliderList.forEach(collidere => {
					if (collidere.tag === 1) {
						result = true;
						console.log("GROUND");
					}
				});
			}
		   return result;
	};
}
