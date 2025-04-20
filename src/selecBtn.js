//장보기 리스트 작성 함수

function writeBtn(section,option){
  //me - 장보기 리스트 작성
  let meDiv = textWithIcon('say','장보기 리스트 작성',option)
  section.appendChild(meDiv)

  //2초 후 ask- 좋아! 슈퍼에서 장보기 언제할꺼야
  setTimeout(()=>{
    let chat = textWithIcon('chat','좋아! 슈퍼에서 장보기 언제할꺼야?',option)
    section.appendChild(chat)
  },1000)

}

//장보기 시작 
function startBtn(section,option){
  //me - 장보기 시작
  let meDiv = textWithIcon('say','장보기 시작',option)
  section.appendChild(meDiv)

  //2초후 - 이제 리스트 작성해보자
  setTimeout(()=>{
    let chat = textWithIcon('chat','이제 리스트를 작성해보자',option)
    section.appendChild(chat)
  },1000)
}

//이번달 내역 확인
function checkBtn(section,option){
  //me - 이번달 내역 확인
  let meDiv = textWithIcon('say','이번달 내역 확인')
  section.appendChild(meDiv)

  //2초후 - 이번 달에 구매한 내역 보여줄게
  setTimeout(()=>{
    let chat = textWithIcon('chat','이번 달에 구매한 내역 보여줄게',option)
    section.appendChild(chat)
  },1000)
}