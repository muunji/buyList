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
    }
  }

  set where(where){
    //문자열이면
    if(typeof where === 'string'){
      this._where=where;
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