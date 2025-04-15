//date, where에 대한 유효성 검사
class Day {
  constructor(date, where){
    this.date = date;
    this.where=where;
  }

  set date(date){
    //값이 있으면
    if(date) {
      this._date = date
    } else {
      console.error('값을 입력해주세요')
    }
  }

  set where(where){
    //문자열이면
    if(typeof where === 'string'){
      this._where=where;
    } else{
      console.error('문자열로 입력해주세요')
    }
  }

  get date(){
    return this._date
  }

  get where(){
    return this._where
  }
}

//category, item, number, price에 대한 유효성 검사
class List{
  constructor(category, item, number, price){
    this.category = category
    this.item = item
    this.number = number
    this.price = price
  }

  set category(category){
    //값이 있으면
    if(category){
      this._category = category
    }
  }

  set item(item){
    //문자열이면
    if(typeof item === 'string'){
      this._item = item
    }
  }

  set number(number){
    //수량, 숫자로 적힌 내용이 있으면
    if(!isNaN(Number(number))){
      this._number=Number(number)
    }
  }

  set price(price){
    //가격, 숫자로 적힌 내용이 있으면
    if(!isNaN(Number(price))){
      this._price=Number(price)
    }
  }

  get category(){
    return this._category
  }

  get item(){
    return this._item
  }

  get number(){
    return this._number
  }

  get price(){
    return this._price
  }
}

//테스트
const day = new Day('','문자')
// console.log(day)