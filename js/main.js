
document.getElementById('myform').addEventListener('submit' , submitclicked)


function submitclicked(e)
{

   var site  = $('#sitename').val() ; 
   var url = $('#siteurl').val() ;
   

   obj = {
       name : site , 
       url : url 
   }

   if(localStorage.getItem('bookmarks')==null)
   {
       //Init array
   }


    e.preventDefault() ;
    
}