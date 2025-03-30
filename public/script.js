//form태그에 입력을 하면 value 값을 브라우저에 출력
let btn = document.getElementsByTagName('button')[0]
btn.addEventListener('click',(e)=>{
  e.preventDefault()
})

//input 값을 가져오는 함수
function getValue(){
  let groupInput = document.querySelector('input[type="radio"]:checked')
  let input = document.querySelectorAll('form > div:last-child > input')

  return 
}
//input창을 만드는 함수 + li 태그 안에 넣기

//함수 실행