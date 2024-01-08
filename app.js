let winCondition = [[0,1,2],[0,4,8],[3,4,5],[0,3,6],[6,7,8],[1,4,7],[2,5,8],[2,4,6]];
let boxes = document.querySelectorAll(".box");
let winDsp = document.querySelector('#winDisplay'); 
let resetBtn = document.querySelector('#resetBtn');
let turn = 'x';
let count = 0;
boxes.forEach((box) => {
    box.onclick = ()=>{
        console.log('box clicked')
        if(turn=='x'){
            box.innerText='X';
            turn = 'y';
        }else{
            box.innerText='O';
            turn = 'x';
        }
        box.disabled=true;
        checkWin();
        count++;
        if(count==9){
            winDsp.innerText="The match is a Draw."
            winDsp.removeAttribute('hidden');
        }
    }
});
const checkWin = ()=>{
    for(let condition of winCondition){
       let val1 = boxes[condition[0]].innerText;
       let val2 = boxes[condition[1]].innerText;
       let val3 = boxes[condition[2]].innerText;
       if(val1!="" && val2!="" && val3!=""){
        if(val1===val2 &&  val2===val3){
            winDsp.innerText = 'The Winner is '+ val1;
            winDsp.removeAttribute('hidden');
            disableBoxes();
        }
       }

    }
}
const disableBoxes=(box)=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const resetBoxes=(box) => { 
    for(box of boxes){
        box.innerText="";
        box.disabled=false;
    }
 }
resetBtn.onclick = () => { 
    resetBoxes();
    winDsp.setAttribute('hidden',true);
 }