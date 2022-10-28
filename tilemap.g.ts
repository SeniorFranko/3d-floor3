// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level":
            case "level1":return tiles.createTilemap(hex`10001000020202020205050606060606050505050103030310100404160416040416040502080a0e10040b0f0f0f0f1e080e0405010909090a0e0c101616160c0922160601090b0f0f0f12100109090c2004040601090c0303110c100109090c2016160605090c0310100c100109090c2016160506090d0f0f0f12090909090d0f1e04050609021004100c10171b1b1b180c18250609011010100c10170303031b0c1b26070901100b0f1310030303031b0c2423070901100c100910181b1b1b1b0c1b27070901010c090914191c1b1b180c1821070909090d0f0f0707070f0f0f131b2307030909090909151a1d1b1b181b1b2105050505050505050505051f21232121`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . 2 . . . . . . 2 
2 . . 2 2 . . . 2 . . . . . . 2 
2 . . 2 . . . . 2 . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 . . . . . 2 . . . . . . 2 
2 . 2 . . . . . 2 2 2 2 . . . 2 
2 . 2 . . . . . 2 2 2 2 . . . 2 
2 . 2 . . . . . . . . . . . . 2 
2 . 2 2 . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorDark0,sprites.dungeon.floorDark2,sprites.builtin.forestTiles0,sprites.castle.tileGrass2,sprites.dungeon.floorLight0,sprites.dungeon.doorOpenNorth,sprites.dungeon.stairWest,sprites.castle.tilePath1,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.vehicle.roadTurn1,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn3,sprites.castle.tilePath3,sprites.vehicle.roadHorizontal,sprites.castle.tileGrass3,sprites.castle.tilePath8,sprites.vehicle.roadIntersection4,sprites.vehicle.roadTurn4,sprites.builtin.forestTiles5,sprites.builtin.forestTiles13,sprites.castle.tileGrass1,sprites.dungeon.greenOuterNorth0,sprites.castle.tileDarkGrass2,sprites.builtin.forestTiles6,sprites.builtin.forestTiles10,sprites.castle.tileDarkGrass1,sprites.builtin.forestTiles7,sprites.builtin.forestTiles15,sprites.vehicle.roadTurn2,sprites.builtin.forestTiles23,sprites.castle.tilePath6,sprites.builtin.forestTiles22,sprites.castle.tilePath9,sprites.builtin.forestTiles4,sprites.castle.tileDarkGrass3,sprites.builtin.forestTiles1,sprites.builtin.forestTiles2,sprites.builtin.forestTiles21], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
