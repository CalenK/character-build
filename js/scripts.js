window.addEventListener("load", function() {
  const form = document.querySelector("form");
  let resetBtn = document.querySelector("button#reset");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const characterName = document.querySelector("input#character-name").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const characterColor = document.querySelector("input#character-color").value;
    const power = document.querySelector('input[name="power"]:checked').value;
    const species = document.querySelector('input[name="species"]:checked').value;

    if (gender === "male" || "female" || "non-binary" && (power === "speed" || "strength" || "flight" || "levitate") && (species === "hedgehog" || "fox" || "cat" || "rabbit")) {
      document.querySelector("span#gender").innerText = gender;
      document.querySelector("span#power").innerText = power;
      document.querySelector("span#species").innerText = species;
    }

    document.querySelector("span#name").innerText = characterName;
    document.querySelector("span#color").innerText = characterColor;

    document.getElementById("result").removeAttribute("class");
  });

  form.addEventListener("submit", function() {
    resetBtn.removeAttribute("class");
  });

  resetBtn.addEventListener("click", function() {
    document.getElementById("character-name").value = null;
    document.getElementById("character-color").value = null;
  });
});