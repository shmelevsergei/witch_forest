import { __private, CCBoolean, CCInteger, CCString } from 'cc';
import { _decorator, BoxCollider2D, Component, Node, TiledLayer, TiledMap, Vec2 } from 'cc';
const { ccclass, property, executeInEditMode} = _decorator;

@ccclass('TilledCollision')
@executeInEditMode(true)
export class TilledCollision extends Component {

    @property(TiledMap)
    tiledMap: TiledMap = null;

    tilesCount : number = 0;

    @property
    startGenerate = false;
    @property
    clearColliders = false;

    protected update(dt: number): void {
        if (this.startGenerate == true) {
            this.startGenerate = false;
            this.ClearColliders();
            this.CreateCollision();
        }
        if (this.clearColliders == true) {
            this.clearColliders = false;
            this.ClearColliders();
        }
    }
    
    ClearColliders() {
        this.node.getComponentsInChildren(BoxCollider2D).forEach(element => {
            element.destroy();
        })
    }

    CreateCollision() {
        let groundLayer = this.tiledMap.getLayer("Ground");
            let x = groundLayer.getLayerSize().width;
            let y = groundLayer.getLayerSize().height;

            let tileImages : {[key:number]: __private._cocos_tiledmap_tiled_types__TMXTilesetInfo} = {};

            for (let i of groundLayer.getTileSets()){
                tileImages[i.firstGid] = i;
            }
            
            for (let i = 0; i < x; i++) {
                for (let j = 0; j < y; j++) {
                    let tile = groundLayer.getTileGIDAt(i, j);
                    if (tile) {
                        let collider = groundLayer.node.addComponent(BoxCollider2D);
                        collider.offset = new Vec2((i) * 32 + (tileImages[tile].imageSize.width / 2), ((j) * -32 + (tileImages[tile].imageSize.height / 2) + 2012));
                        collider.size.width = tileImages[tile].imageSize.width;
                        collider.size.height = tileImages[tile].imageSize.height;
                        collider.friction = 0;
                        collider.tag = 1;
                        console.log(tile);
                    }
                }
            }
    }
}


