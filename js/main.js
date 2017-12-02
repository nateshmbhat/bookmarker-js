document.getElementById('myform').addEventListener('submit' , submitclicked) ;


function submitclicked(e)
{

   var site  = $('#sitename').val() ; 
   var url = $('#siteurl').val() ;
   

   bookmark = {
       name : site , 
       url : url 
   }


   if(localStorage.getItem('bookmarks')==null)
   {
       //Init array
       var bookmarks = []  ;
       bookmarks.push(bookmark)

       localStorage.setItem('bookmarks' ,JSON.stringify(bookmarks) ) ;
   }


   else
   {
       //get bookmarks 

       bookmarks = localStorage.getItem('bookmarks');
       bookmarks = JSON.parse(bookmarks) ;

       bookmarks.push(bookmark) ;
       
       localStorage.setItem('bookmarks' , JSON.stringify(bookmarks)) ;
       console.log(bookmarks) ; 
       
   }

    e.preventDefault() ;
    
}



function fetchbookmarks()
{
       bookmarks = localStorage.getItem('bookmarks');
       bookmarks = JSON.parse(bookmarks) ;
       console.log(bookmarks) ;


       for(i = 0 ; i<bookmarks.length  ; i++)
       {
           var name = bookmarks[i].name ; 
           var url = bookmarks[i].url ; 


           //THe Below string is an HTML TEMPLATE which only works in ES6
           console.log('Starting template') ;
           mystring = `\
            <td>${i+1}</td>\
            <td>${name}</td>\
            <td>${url}</td>\ 
           `
           
           console.log($('#results').val()) ;

           document.getElementById('results').innerHTML+= mystring

       }

}