
$('#myform').submit(submitclicked) ;

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

   $('#bm_success').show() ;

    e.preventDefault() ;
    
}



function fetchbookmarks()
{
       bookmarks = localStorage.getItem('bookmarks');
       bookmarks = JSON.parse(bookmarks) ;
       console.log(bookmarks) ;

       if(bookmarks.length==0)
            {
                $('.thead-dark').hide() ;
            }


       for(i = 0 ; i<bookmarks.length  ; i++)
       {
           var name = bookmarks[i].name ; 
           var url = bookmarks[i].url ; 


           //THe Below string is an HTML TEMPLATE which only works in ES6
           console.log('Starting template') ;
           mystring = `\
           <trow>

            <td >${i+1}</td>\
            <td class="font-weight-bold ">${name.toUpperCase()}</td>\
            
            <td class="font-weight-bold" style="color:blue;">
            
            <a href="${url}"  title="${name}" target="_blank">${url}</a>
            <input type="button" onclick=deletebookmark('${url}')  class="btn btn-danger btn-sm" name="Delete" value="Delete"/>
            </td>\ 
        </trow>
           `
           
           console.log($('#table_results').val()) ;

           document.getElementById('table_results').innerHTML+= mystring

       }
}


function deletebookmark(url)
{
    console.log('start deletion') ;
    console.log($(event.target).parent().parent()) ;
    var data_row =  $(event.target).parent().parent()
    
    bookmarks  = JSON.parse(localStorage.getItem('bookmarks')) ;
    
    for(i= 0 ; i<bookmarks.length ; i++)
    {
        if(bookmarks[i].url==url)
                {
                    data_row.addClass('animated fadeOutRight').fadeOut() ;
                    console.log("Deleted " + bookmarks[i]) ;                    
                    bookmarks.pop(i) ; 

                    localStorage.setItem('bookmarks' , JSON.stringify(bookmarks)) ;
                    break ;
                }
    }
    
    //Check if the list has become empty !
    console.log('boomarks.length = ' , bookmarks.length)
    if(!bookmarks.length)
    {
        $('.thead-dark').addClass('animated fadeOut').fadeOut() ;
    }
}
