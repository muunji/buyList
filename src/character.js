
// one: chocolate;
// two: darkcyan;
// three: darkgreen;
// four: dodgerblue;

colorArr = ['one','two','three','four']

//색깔이 있는 div
function makeColorDiv(number){
  let colorDiv = document.createElement('div')
  colorDiv.style.width = '200px'
  colorDiv.style.height='200px'
  colorDiv.style.borderRadius = '50%'

  colorDiv.classList.add = colorArr[number]
}

//색깔이 있는 div를 가진 요소 생성 함수
function sectionColorDiv(){

}

//div 선택했을 때 반환값을 가지는 함수
function selectColorDiv(){

}