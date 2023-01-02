const addComment = () => {
    const textField = document.getElementById("text-field");
    const textFieldValue = textField.value;
    const commentContainer = document.getElementById("comment-container");
    const p = document.createElement("p");
    p.innerText = textFieldValue;
    commentContainer.appendChild(p);
    textField.value = ""
}

document.getElementById("display-none").addEventListener("click", function () {
    const h3 = document.getElementById("text-h");
    const inputField = document.getElementById("input-field");
    const inputValue = inputField.value;
    console.log(inputValue)
    inputValue == "delete" ? h3.style.display = "none" :
        inputValue == "" ? alert("please type your text") :
            inputValue == " " ? h3.innerText = "please write something" :
                document.body.style.backgroundColor = "blue"

    inputField.value = ""
});

document.getElementById("input-field").addEventListener("focus", function(){
    document.body.style.backgroundColor="green"
})
document.getElementById("input-field").addEventListener("blur", function(){
    document.body.style.backgroundColor="gray"
})


document.getElementById("text-h").addEventListener("mousemove", function(){
    const h3 = document.getElementById("text-h").style.marginLeft="20px";
    const h = document.getElementById("text-h").style.marginRight="20px";
})