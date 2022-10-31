controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.toggleViewMode()
})
game.stats = true
tiles.setCurrentTilemap(tilemap`level`)
scene.setBackgroundImage(assets.image`myImage`)
