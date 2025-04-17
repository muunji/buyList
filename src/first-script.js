    //root
    let section = document.querySelectorAll('section')

    //ask
    let askDiv = textWithIcon('chat','목록을 말해줘')
    section[0].appendChild(askDiv)

    //me
    //checkbox example
    let exampleList = checkList('휴지 1개 2000원')
    let exampleDiv = checkListWithIcon(exampleList)
    section[0].appendChild(exampleDiv)

    //입력창
    let form = makeList()
    section[1].appendChild(form)

    //icon
    let colorArr = ['one','two','three','four']

    //선택할 수 있는 div 생성
    let colorSection = sectionColorDiv(colorArr)
    let iconDiv = document.getElementById('icon')
    iconDiv.appendChild(colorSection)

    //클릭 이벤트 적용
    let colorDivs = colorSection.children
    for(let i=0; i<colorDivs.length; i++){
      colorDivs[i].addEventListener('click',(e)=>{

        //클래스 가져오는 함수 적용
        console.log(selectColorDiv(e))

        //클래스 적용시키기
        let chatDiv = document.getElementsByClassName('chatIcon')
        chatDiv[0].classList.add(selectColorDiv(e))

        //선택한 후 안보여야 함
        colorSection.style.display='none'
      })
    }