
function firstChat(){
  let section = document.querySelectorAll('section')
  //ask - "어서와! 장보기 목록 작성 시작해볼까"
  let askDiv = textWithIcon('chat','어서와! 장보기 목록 작성해볼까?')
  section[0].appendChild(askDiv)
  
  //채팅 - 버튼 선택
  let btnDiv = selectOptionBtn()
  section[1].appendChild(btnDiv)
  
  //버튼에 따른 실행 
  let btns = btnDiv.children
  //첫번째 버튼
  btns[0].addEventListener('click',()=>{
    writeBtn(section[0])
  })
  btns[1].addEventListener('click',()=>{
    startBtn(section[0])
  })
  btns[2].addEventListener('click',()=>{
    checkBtn(section[0])
  })

}