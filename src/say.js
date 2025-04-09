//1. 버튼 선택 함수

//2. 구매처 구매 날짜 선택 함수


//3.4 에 동일한 구성 필요
function makeInput(inputName){
  let input = document.createElement('input')
  input.type = 'text'
  input.name = inputName

  return input
}

function makeBtn(text){
  let btn = document.createElement('button')
  btn.textContent = text
  
  return btn
}

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

//3. 리스트 작성 함수

//4. 리스트 수정, 삭제 함수