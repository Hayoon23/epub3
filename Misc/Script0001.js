document.addEventListener("DOMContentLoaded", function () {

    const popup = document.getElementById("imagePopup");
    const popupContent = document.getElementById("popubContent");

    // Add click event to all images with the given trigger class
    document.querySelectorAll('.popup-trigger').forEach(image => {
      image.addEventListener("click", function () {
        popupContent.src = this.src;
        popup.style.display = "flex";
      });
    });
    // Close popup on click anywhere in the popup
    popup.addEventListener("click", function () {
      popup.style.display = "none";
    });

});

//creat typing effect
document.addEventListener("DOMContentLoaded", function() {

  let i = 0; // Change this to let
  const text = "Hello, world!\nThis is a new line.\nHere comes another line."; // Example text with newline characters
  const typingSpeed = 100; // Speed of typing
  const typing = document.getElementById("typedtext"); // Assuming you have an element with the ID 'typedtext'

  function typeWriter() {
    // Split text by newline character '\n'
    let lines = text.split('\n');
    
    if (i < lines.length) {
      // Add the line and a <br> for a new line
      typing.innerHTML += lines[i] + "<br/>";
      i++;
      setTimeout(typeWriter, typingSpeed);
    }
  }

  typeWriter();
});




