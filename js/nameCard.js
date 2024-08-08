const profileEls = document.querySelectorAll(".profileBox input");
const resultProfileEls = document.querySelectorAll(".resultProfile");

const btnMake = document.querySelector(".btnMake");
let profileInfo = "";

btnMake.addEventListener('click',function(){
  profileInfo = "";
  profileEls.forEach(function(profile, index){
    console.log(profile.value);
    
    if(index===0){
      resultProfileEls[0].innerHTML = ''; 
      resultProfileEls[0].innerHTML = profile.value
    }else{
      profileInfo = profileInfo + profile.value + '<br>'
    }
   
  })
  // console.log(resultProfileEls.length)
  resultProfileEls[1].innerHTML = ''; 
  resultProfileEls[1].innerHTML = profileInfo;
})