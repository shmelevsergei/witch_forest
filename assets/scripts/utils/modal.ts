import { Node } from "cc";

export const showHideModal = (node: Node) => {
	node.active = !node.active;
};
