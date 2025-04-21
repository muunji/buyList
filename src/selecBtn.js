//장보기 리스트 작성 함수

function writeBtn(sections,option){
  //me - 장보기 리스트 작성
  let meDiv = textWithIcon('say','장보기 리스트 작성',option)
  sections[0].appendChild(meDiv)

  //2초 후 ask- 좋아! 슈퍼에서 장보기 언제할꺼야
  // say - #root section[1] 2번 함수로 변경되야함
  setTimeout(()=>{
    let chat = textWithIcon('chat','좋아! 슈퍼에서 장보기 언제할꺼야?',option)
    sections[0].appendChild(chat)

    sections[1].innerHTML = '' //초기화
    let dateDiv = dateAndSpace()
    sections[1].appendChild(dateDiv)
  },1000)

}

//장보기 시작 
function startBtn(sections,option){
  //me - 장보기 시작
  let meDiv = textWithIcon('say','장보기 시작',option)
  sections[0].appendChild(meDiv)

  //2초후 - 이제 리스트 작성해보자
  //say -  #root section[1] 3번 함수로 변경
  setTimeout(()=>{
    let chat = textWithIcon('chat','이제 리스트를 작성해보자',option)
    sections[0].appendChild(chat)

    sections[1].innerHTML = '' //초기화
    let listDiv = makeList()
    sections[1].appendChild(listDiv)
  },1000)
}

//이번달 내역 확인
function checkBtn(sections,option){
  //me - 이번달 내역 확인
  let meDiv = textWithIcon('say','이번달 내역 확인')
  sections[0].appendChild(meDiv)

  //2초후 - 이번 달에 구매한 내역 보여줄게
  //say - #root section[0] 1-1번 함수로 변경
  setTimeout(()=>{
    let chat = textWithIcon('chat','이번 달에 구매한 내역 보여줄게',option)
    sections[0].appendChild(chat)

    sections[1].innerHTML = '' //초기화
    let checkDiv = selectOptionBtnTwo()
    sections[1].appendChild(checkDiv)
  },1000)
}