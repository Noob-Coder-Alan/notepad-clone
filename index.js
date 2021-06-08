
    let isBold = false;
    let isUnderlined = false;
    let isItalic = false

    function load_text() {
      document.getElementById("output").value = "";
    }

    function bold_click() {
        if(!isBold){
            document.getElementById("output").style.fontWeight = "bold";
        } else {
            document.getElementById("output").style.fontWeight = "normal";
        }

        isBold = !isBold
    }

    function underline_click() {
        if(!isUnderlined){
            document.getElementById("output").style.textDecoration = "underline";
        } else {
            document.getElementById("output").style.textDecoration = "none";
        }

        isUnderlined = !isUnderlined
    }

    function italic_click() {
        if(!isItalic){
            document.getElementById("output").style.fontStyle = "italic";
        } else {
            document.getElementById("output").style.fontStyle = "normal";
        }

        isItalic = !isItalic
    }

    function normal_click() {
        isBold = false;
        isUnderlined = false;
        isItalic = false
        
        document.getElementById("output").style.textDecoration = "none";
        document.getElementById("output").style.fontWeight = "normal";
        document.getElementById("output").style.fontStyle = "normal";
    }

    function highlight(text) {
        var inputText = document.getElementById("inputText");
        var innerHTML = inputText.innerHTML;
        var index = innerHTML.indexOf(text);
        if (index >= 0) { 
        innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
        inputText.innerHTML = innerHTML;
        }
    }

    function getLength(){
        console.log(document.getElementById("output").value.length);
    }

    function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    displayContents(contents);
  };
  reader.readAsText(file);
}

function displayContents(contents) {
  var element = document.getElementById('output').value = contents;
}

var elem = document.getElementById('file-input')
if(elem){
    elem.addEventListener('change', readSingleFile, false);
}
