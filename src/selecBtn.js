//장보기 리스트 작성 함수

function writeBtn(section){
  //me - 장보기 리스트 작성
  let meDiv = textWithIcon('say','장보기 리스트 작성')
  section.appendChild(meDiv)

  //2초 후 ask- 좋아! 슈퍼에서 장보기 언제할꺼야
  setTimeout(()=>{
    let chat = textWithIcon('chat','좋아! 슈퍼에서 장보기 언제할꺼야?')
    section.appendChild(chat)
  },1000)

}

//장보기 시작 
function startBtn(section){
  //me - 장보기 시작
  let meDiv = textWithIcon('say','장보기 시작')
  section.appendChild(meDiv)

  //2초후 - 이제 리스트 작성해보자
  setTimeout(()=>{
    let chat = textWithIcon('chat','이제 리스트를 작성해보자')
    section.appendChild(chat)
  },1000)
}

//이번달 내역 확인
function checkBtn(){
  //me - 이번달 내역 확인

  //2초후 - 이번 달에 구매한 내역 보여줄게
}