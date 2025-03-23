console.log('연결')

//제출버튼튼
let submitBtn = document.getElementsByTagName('button')[0]
//데이터 담을 배열
let list = []
//key로 사용할 숫자
let count = 0

//입력값을 localStorage에 저장 후 저장된 내용을 브라우저에 출력
submitBtn.addEventListener('click',()=>{
  list = []
  count++

  let values = {
    group : document.querySelector('input[name="group"]:checked').value,
    item: document.getElementsByName('item')[0].value,
    count:document.getElementsByName('count')[0].value,
    price : document.getElementsByName('price')[0].value
  }

  console.log(values)

  localStorage.setItem(`${count}`, JSON.stringify(values))
  // makeList(values)
})

function makeList(values){
  let ul = document.getElementsByTagName('ul')[0]

  let li = document.createElement('li')

  li.innerHTML = `<input type='checkbox' placeholder='list'>${values.item} ${values.count}개 ${values.price}원`

  ul.appendChild(li)
}