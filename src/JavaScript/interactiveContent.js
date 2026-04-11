function InterLogo(){
setTimeout(() => {
    $("#displayMore > img").addClass("shake");
}, 10);
  
}


function InterNotes(){
    $("#btnNotes").click(()=>{
          $("#displayMore > img").css("display","none");
          $("#writeNotes").css("display","flex");
    });
}


export {InterLogo , InterNotes};