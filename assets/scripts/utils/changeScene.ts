import { director } from "cc";

export const onChangeScene = (scene) => {
	if (scene) {
		director.loadScene(scene);
	}
};
