// Change Paragraph Text
function changeText() {
    document.getElementById("dynamicText").innerHTML =
    "This text was dynamically updated using JavaScript DOM methods successfully!";
}

// Add Skill
function addSkill() {
    let input = document.getElementById("skillInput");
    let value = input.value;

    if(value.trim() !== ""){
        let li = document.createElement("li");
        li.textContent = value;
        document.getElementById("skillList").appendChild(li);
        input.value = "";
    }
}

// Remove Skill
function removeSkill() {
    let list = document.getElementById("skillList");
    if(list.lastChild){
        list.removeChild(list.lastChild);
    }
}

// Theme Switcher
function changeTheme(theme){

    if(theme === "black"){
        document.body.style.background =
        "radial-gradient(circle at top,#111111,#000000)";
    }

    if(theme === "royal"){
        document.body.style.background =
        "linear-gradient(135deg,#141e30,#243b55)";
    }

    if(theme === "brown"){
        document.body.style.background =
        "linear-gradient(135deg,#3e2723,#6d4c41,#a1887f)";
    }

    if(theme === "cream"){
        document.body.style.background =
        "linear-gradient(135deg,#fdf6e3,#f5e6ca,#e8d5b7)";
    }

    if(theme === "cool"){
        document.body.style.background =
        "linear-gradient(135deg,#1f2937,#374151,#4b5563)";
    }
}
