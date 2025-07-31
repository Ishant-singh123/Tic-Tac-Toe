let boxes=document.querySelectorAll(".boxes");
let reset=document.querySelector(".reset-button");
let screen=document.querySelector("body");
let result=document.createElement("h1");
let turn=false;
let gameover;
boxes.forEach(function allboxes(box){
    box.addEventListener("click",()=>{
        if(gameover||box.innerText!==""){
            return;
        }
        if(turn){
            // console.log("button is clicked");
            box.innerText="O";
            turn=false;
        }

        else{
            box.innerText="X";
            turn=true;
        }
        checkwinner();   
    });
});

function end(){
    
    for(let box of boxes){
        // console.log(box);
        box.disabled=true;
        
    }
}
function start(){
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    turn=false;
    gameover=false;
}

const winningcondition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

function checkwinner(){
    for(let w of winningcondition){
        let post1=boxes[w[0]].innerText;
        let post2=boxes[w[1]].innerText;
        let post3=boxes[w[2]].innerText;
        if(post1 !=="" && post2!=="" && post3!==""){
            if(post1===post2 && post2===post3){
                console.log("winner is here!",post1);
                showresult(post1);
                end();  
                gameover=true;
                return; 
            }
            
        }
    }
}

function showresult(x){
    result.style.display="block";
    result.innerText=`winner is ${x}`;
    result.style.textAlign="center";
    
    screen.prepend(result); 
}

reset.addEventListener("click",()=>{
    
    result.style.display="none";
    start();
    gameover=false;

})