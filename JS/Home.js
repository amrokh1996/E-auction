setTimeout(()=>{
  let valueDisplays = document.querySelectorAll(".count");
  let interval = 4000;
  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = valueDisplay.textContent;
    let counter = setInterval(function () {
      if(endValue-5000 >= startValue){
        startValue += 99;
      }else if(endValue-1000 >= startValue){
        startValue += 49;
      }else if(endValue-500 >= startValue){
        startValue += 20;
      }
      else{
        startValue += 1;
      }
      valueDisplay.textContent = startValue;
      if (startValue == endValue) {
        clearInterval(counter);
      }
    }, 0.5);
  });
  
},5000)







  





 


