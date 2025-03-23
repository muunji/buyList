console.log('연결')

//제출버튼
let submitBtn = document.getElementsByTagName('button')[0]
//데이터 담을 배열
let list = []
//key로 사용할 숫자
let count = 0

//새로고침해도 남김
getAllStorage()
//입력값을 localStorage에 저장 후 저장된 내용을 브라우저에 출력
submitBtn.addEventListener('click',()=>{
  // list = []
  document.getElementsByTagName('ul')[0].innerHTML=''
  count++

  let values = {
    group : document.querySelector('input[name="group"]:checked').value,
    item: document.getElementsByName('item')[0].value,
    count:document.getElementsByName('count')[0].value,
    price : document.getElementsByName('price')[0].value
  }

  console.log(values)

  localStorage.setItem(`${count}`, JSON.stringify(values))

  //localStorage에 저장된 내용을 리스트로 만들기
  getAllStorage()
})

function makeList(value){
  let ul = document.getElementsByTagName('ul')[0]
  
  let li = document.createElement('li')
  li.innerHTML = `<input type='checkbox' placeholder='list'>${value.item} ${value.count}개 ${value.price}원`
  
  ul.appendChild(li)
}

function getAllStorage(){
  for(let i = 0; i<localStorage.length; i++){
    const key = localStorage.key(i)
    const value = JSON.parse(localStorage.getItem(key))
    makeList(value)
  }
}
