console.log('연결')

//제출버튼튼
let submitBtn = document.getElementsByTagName('button')[0]
//데이터 담을 배열
let list = []

submitBtn.addEventListener('click',()=>{
  list = []

  let values = {
    group : document.querySelector('input[name="group"]:checked').value,
    item: document.getElementsByName('item')[0].value,
    count:document.getElementsByName('count')[0].value,
    price : document.getElementsByName('price')[0].value
  }

  console.log(values)
})

function makeList(){
  let ul = document.getElementsByTagName('ul')[0]

  let li = document.createElement('li')
}

function makeCheckInput(){
  let input = document.createElement('input')
  input.type = 'checkbox'
  input.placeholder = 'list'

  return input
}