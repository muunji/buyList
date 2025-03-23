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
  makeList(values)
})

function makeList(values){
  let ul = document.getElementsByTagName('ul')[0]

  let li = document.createElement('li')
  let input = makeCheckInput(values);

  li.innerHtml = `${values.item} ${values.count}개 ${values.price}원`

  li.appendChild(input)
  ul.appendChild(li)
}

function makeCheckInput(values){
  let input = document.createElement('input')
  input.type = 'checkbox'
  input.placeholder = 'list'

  return input
}