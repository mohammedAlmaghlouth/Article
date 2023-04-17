
// convert to Froala form
function initForm(){
    var editor = new FroalaEditor('#con, #con_ar');
}
initForm();
// form validation 

    // Validate textareas 
    // validate Content
    function validateForm() {
        var conValue = document.getElementById("con").value;
        var con_arValue = document.getElementById("con_ar").value;
        
        // I put 17 instead of 10, because it seems to me that froala add 7 hidden characters somehow before the actual text :! 
        if (conValue.length >= 17 || con_arValue.length >= 17) {
          return true;
        }
        
        alert("Please add content.");
        return false;
      }
      
      document.getElementById("form").onsubmit = validateForm;

//increment likes 

    function likedArticle() {
    
    var likesCount = document.getElementById("likesNum").innerHTML;

    likesCount = parseInt(likesCount);
    console.log(likesCount)
    // increment it
    likesCount++;
    
    document.getElementById("likesNum").innerHTML = likesCount;
    }
    var likeButton = document.getElementById("like-plus");
    likeButton.addEventListener("click", likedArticle);





//append section after create 
    const deleteButton = document.getElementByClass(".red-button");
    function deleteArticle(articleId) {
        const result = confirm("Are you sure to delete this article?");
        if (result) {
            const elementToDelete = document.querySelector(articleId);
            elementToDelete.remove();
        }
    }

//set Language " not completed yet "

function setLanguage(language) {
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = (language === 'ar') ? 'styles_ar.css' : '';
  
    const existingLink = document.querySelector('link[href="styles_ar.css"]');
    if (existingLink) {
      document.head.removeChild(existingLink);
    }
  
    if (language === 'ar') {
      document.head.appendChild(cssLink);
    }
    
    localStorage.setItem("language", language);
    // Set the selected value of the <select> element to the current language
  document.getElementById('language-select').value = language;
  localStorage.setItem("selectedLanguage", document.getElementById('language-select').value);
    
  }

  window.onload = function() {
    setLanguage(localStorage.getItem('language') || 'en');
    document.getElementById('language-select').value = localStorage.getItem('selectedLanguage') || 'en';
  };




    

        