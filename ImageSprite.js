class ImageSprite {
    constructor(x,y,width, height, Image)
    {
        
        this.height = height
        this.width = width
        this.color = color
        this.image = loadImage("Triangle.png")
        
        var Options = {
            isStatic: false,
            density: 1.5,
            friction: 1.0
         }

        this.body = Bodies.rectangle(x, y ,this.width,this.height, Options)
        World.add(world, this.body)

        this.Sprite = createSprite(this.body.position.x, this.body.position.y, this.width, this.height)
        console.log(this.image) 
        this.Sprite.addImage("spriteImage", this.image)
        this.Sprite.scale = 0.06
        this.Sprite.debug = true
        

        Sprites.push(this)
        
    }

    Update()
    {

        this.Sprite.x = this.body.position.x
        this.Sprite.y = this.body.position.y

        this.Sprite.shapeColor = this.color

        this.Sprite.changeAnimation("spriteImage")
    }
}