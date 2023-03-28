let scoreEleL = document.getElementById("zeroEleL")
let scoreEleR = document.getElementById("zeroEleR")

// let userWonEle = document.getElementById("userWon")
let drawWonEle = document.getElementById("drawWon")
// let compWonEle = document.getElementById("compWon")

let compChoseEle = document.getElementById("compChose")
let userChoseEle = document.getElementById("userChose")

let compChoseNum = 0
let userChoseNum = 0


// Start Game Function

function startGame(){
    
    // Computer choosing section------------------------------------------->>>
    
    function GenRandomNum(){
        let num = Math.floor((Math.random() * 3) + 1)
        // console.log(num)
        return num
    }
    
    // GenRandomNum()
    
    function CompAssign(){
        compChoseNum = GenRandomNum()
        
        if(compChoseNum === 1){
            // console.log("Paper")
            return "Paper"
        }
        if(compChoseNum === 2){
            // console.log("Rock")
            return "Rock"
        }
        if(compChoseNum === 3){
            // console.log("Scissor")
            return "Scissor"
        }
    }
    
    let choiceX = CompAssign()
    // console.log(choiceX)
    
    compChoseEle.textContent = "Computer chose: "
    compChoseEle.textContent += choiceX
    
    
    // Judging Section----------------------------------------------------->>>
    
    function JudgeNum(){
        if(userChoseNum === 1 && compChoseNum === 3){
            scoreEleR.textContent = +scoreEleR.textContent + 1
            return "Comp Won"
            // userWonEle.textContent = "Won"   //Why can't be reached why it's a problem
        }
        if(userChoseNum === 3 && compChoseNum === 1){
            scoreEleL.textContent = +scoreEleL.textContent + 1
            return "User Won"
        }
        if(userChoseNum === compChoseNum){
            return "Draw"
        }
        if(userChoseNum < compChoseNum){
            scoreEleL.textContent = +scoreEleL.textContent + 1
            return "User Won"
        }
        if(userChoseNum > compChoseNum){
            scoreEleR.textContent = +scoreEleR.textContent + 1
            return "Comp Won"
        }
    
    }
    
    let resultNum = JudgeNum()
    drawWonEle.textContent = resultNum

}


// User choosing section---------------------------------------------->>>


function paperChoseFn(){
    userChoseEle.textContent = "You chose: "
    userChoseEle.textContent += "Paper"
    userChoseNum = 1
    startGame()
}

function rockChoseFn(){
    userChoseEle.textContent = "You chose: "
    userChoseEle.textContent += "Rock"
    userChoseNum = 2
    startGame()
}

function scissorChoseFn(){
    userChoseEle.textContent = "You chose: "
    userChoseEle.textContent += "Scissor"
    userChoseNum = 3
    startGame()
}

// console.log(userChose)