console.log('연결')

//채팅 형태로 나오는 함수
//아이콘, 텍스트
//체크박스 형태 + 총 가격이 나오는 함수 - ul/li

//1. 텍스트만 있는 함수
function text(text){
  let div = document.createElement('div')
  let p = document.createElement('p')
  p.textContent = text
  div.appendChild(p)

  return div
}
//2. 아이콘만 있는 함수
//3. 텍스트 + 아이콘 있는 함수
//4. 체크박스 형태 함수
//5. 총 가격 함수
//6. 체크박스 여러개 일 때 하나의 말풍선에 담길 수 있게하는 함수
//7. 리스트 말풍선 + 총 가격까지 나오게하는 함수
//8. 아이콘 + 리스트 말풍선

console.log(text('test'))