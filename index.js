//detecting button press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    animationButton(buttonInnerHTML);    
}
)
}

//detecting keyboard press

 document.addEventListener("keydown", function(event){
    makeSound(event.key);
    animationButton(event.key);  
});
    
    //at this step, event.key is a string which represent the key pressed at that event
    //the property 'key' of event is automatically declared by the browser
function makeSound(key){
    //this is declare function, not call function
        switch(key){
     case"w":
     var crash = new Audio ("./sounds/crash.mp3");
     crash.play();
     break;

     case"a":
     var kickBass = new Audio ("./sounds/kick-bass.mp3");
     kickBass.play();
     break;

     case"s":
     var snare = new Audio ("./sounds/snare.mp3");
     snare.play();
     break;

     case"d":
     var tom1 = new Audio ("./sounds/tom-1.mp3");
     tom1.play();
     break;

     case"j":
     var tom2 = new Audio ("./sounds/tom-2.mp3");
     tom2.play();
     break;

     case"k":
     var tom3 = new Audio ("./sounds/tom-3.mp3");
     tom3.play();
     break;

     case"l":
     var tom4 = new Audio ("./sounds/tom-4.mp3");
     tom4.play();
     break;
 default: console.log(key);
 //switch statement is checking the key, so that have to put that value of parameter inside, which is the 'key'
    }
    }

//Add animation
function animationButton(currentKey){
    var activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

}
//summary here
//Use loop for the button pressing, because we have a class of button, and we have to call them out to give them different audio values.
//no need to use loop for the keyboard pressing, because we address it globally, not for any specific HTML 