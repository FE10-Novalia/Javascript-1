function playWithAsterik(n) {
    // your code here
    let str = ``
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(j >= n - i - 1){
                str += `* `
            }else{
                str += ' '
            }
        }str += '\n'
    }

    return str
  }

  console.log(playWithAsterik(5))
  /*
      *
     * *
    * * *
   * * * *
  * * * * *
  */
  
  