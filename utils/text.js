{
  <text>
    This is
    <tspan font-weight="bold" fill="red">bold and red</tspan>
  </text>
}



class svg {
  constructor (){
    this.textInternal = ''
    this.colorInternal = ""
  }
  render(){
    return `<svg width="350" height="60" xmlns="http://www.w3.org/2000/svg"></svg>`
  }
  }

setText(message,color){
  if(message.length > 3){
    throw new Error ("Text Must Be Less Then 3")
  }
}
