console.log('연결')

//채팅 형태로 나오는 함수
//아이콘, 텍스트
//체크박스 형태 + 총 가격이 나오는 함수 - ul/li

//1. 텍스트만 있는 함수
function text(text){
  let p = document.createElement('p')
  p.textContent = text

  return p
}
//1-2. 텍스트를 가진 말풍선 함수
function bubbleText(text){
  let div = document.createElement('div')
  div.classList.add('bubble')
  
  let p = text(text)
  div.appendChild(p)
  
  return div
}
//2. 아이콘만 있는 함수
function icon(who){
  let div = document.createElement('div')
  div.classList.add('icon')

  if(who === 'chat'){
    div.classList.add('chatIcon')
  }
  if(who === 'say'){
    div.classList.add('sayIcon')
  }
  if(who === 'again'){
    div.classList.add('againIcon')
  }

  return div
}
//3. 텍스트 + 아이콘 있는 함수
function textWithIcon (who, text){
  let div = document.createElement('div')
  let icon = icon(who)
  let text = text(text)

  div.appendChild(icon)
  div.appendChild(text)

  return div
}
//4. 체크박스 형태 함수
function checkList(text){
  let label = document.createElement('label')
  let input = document.createElement('input')
  input.type= 'checkbox'
  input.textContent = text

  label.appendChild(input)

  let li = document.createElement('li')

  li.append(label)

  return li
}
//5. 총 가격 함수
//6. 체크박스 여러개 일 때 하나의 말풍선에 담길 수 있게하는 함수
//7. 리스트 말풍선 + 총 가격까지 나오게하는 함수
//8. 아이콘 + 리스트 말풍선

console.log(text('test'))