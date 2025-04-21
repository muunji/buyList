//1. 버튼 선택 함수
function selectOptionBtn(){
  let write = makeBtn('장보기 리스트 작성')
  let start = makeBtn('장보기 시작')
  let checkMonth = makeBtn('이번달 내역 확인')

  let div = document.createElement('div')
  div.appendChild(write)
  div.appendChild(start)
  div.appendChild(checkMonth)

  return div
}

//1-1. 내역확인 클릭 후 버튼2개만 나오는 함수

//input[type='date']생성 함수
function makeInputDate(){

  let input = document.createElement('input')
  input.type = 'date'
  input.name = 'date'
  
  return input
}

//2. 구매처 구매 날짜 선택 함수
function dateAndSpace(){
  let div = document.createElement('div')

  let space = makeInput('where')
  let date = makeInputDate()
  let finish = makeBtn('완료')

  div.appendChild(space)
  div.appendChild(date)
  div.appendChild(finish)

  return div
}


//3.4 에 동일한 구성 필요
//input[type='text'] 생성 함수
function makeInput(inputName){
  let input = document.createElement('input')
  input.type = 'text'
  input.name = inputName
  input.placeholder = inputName

  return input
}

//input[type='radio'] 생성 함수
function makeInputRadio(inputValue){
  let input = document.createElement('input')
  input.type = 'radio'
  input.name = 'category'
  input.value = inputValue

  let label = document.createElement('label')

  let span = document.createElement('span')
  span.textContent = inputValue

  label.appendChild(input)
  label.appendChild(span)

  return label
}

//button 생성 함수
function makeBtn(text){
  let btn = document.createElement('button')
  btn.textContent = text
  
  return btn
}

//input[type='text']과 btn 생성 함수
function makeInputWithBtn(btnText){
  let div = document.createElement('div')

  let itemInput = makeInput('item')
  let numberInput = makeInput('number')
  let priceInput = makeInput('price')

  div.appendChild(itemInput)
  div.appendChild(numberInput)
  div.appendChild(priceInput)

  let btn = makeBtn(btnText)

  div.appendChild(btn)

  return div
}

//input[type='radio']과 btn 생성 함수
function makeRadioInputWithBtn(){
  let div = document.createElement('div')

  let grocery = makeInputRadio('grocery')
  let family = makeInputRadio('family')

  div.appendChild(grocery)
  div.appendChild(family)

  let btn = makeBtn('추가')

  div.appendChild(btn)

  return div
}

//3. 리스트 작성 함수
function makeList(){
  let section = document.createElement('section')

  let radioInput = makeRadioInputWithBtn()
  let textInput = makeInputWithBtn('제출')

  section.appendChild(radioInput)
  section.appendChild(textInput)

  return section
}

//4. 리스트 수정, 삭제 함수
//수정 삭제 버튼
function chooseBtn(){
  let div = document.createElement('div')

  let edit = makeBtn('수정')
  let deleteBtn = makeBtn('삭제')

  div.appendChild(edit)
  div.appendChild(deleteBtn)

  return div
}

//수정하는 input 생성 함수
function listEdit(){
  let section = document.createElement('section')

  let btns = chooseBtn()
  let editInput = makeInputWithBtn('수정')

  section.appendChild(btns)
  section.appendChild(editInput)

  return section
}