class Emoji
{
    constructor(food){
        this.food = food;
    }

    feed(){
        this.food += 10;
        if(this.food >= 100){
            this.food = 100;
        }
        document.querySelector('.food').textContent = emoji.food;
        
    };
    
    checkState(){
        if(emoji.food > 50){
            document.querySelector('.pet_img').src = 'vecteezy_emoji-feel-good-smile-happy-png-file_10313700.png'
        }else {
            document.querySelector('.pet_img').src = 'Sad-Emoji-PNG-Free-Download.png'
        };
        document.querySelector('.food').textContent = emoji.food;

    }
}


const emoji = new Emoji(100);



let intervalId = setInterval(() => {
    emoji.food -= Math.floor(Math.random() * 20);
    if(emoji.food <=0){
        emoji.food = 0;
        clearInterval(intervalId);
    }
    emoji.checkState();

}, 1000);

let feed = document.querySelector('.feed');

feed.addEventListener('click', function(){
    emoji.feed();
    
})


