const methodologyEl = document.querySelector(".methodology");
const outputEl = document.querySelector(".output");
const impEl = document.querySelector(".implementation");

function Methodology_function() {
  if (methodologyEl.style.display === "none") {
    methodologyEl.style.display = "block";
    //outputEl.style.display = "none";
    //impEl.style.display = "none";
  } else {
    methodologyEl.style.display = "none";
  }
}

function Output_function() {
  if (outputEl.style.display === "none") {
    outputEl.style.display = "block";
    //impEl.style.display = "none";
    //methodologyEl.style.display = "none";
  } else {
    outputEl.style.display = "none";
  }
}

function Implementation_function() {
  if (impEl.style.display === "none") {
    impEl.style.display = "block";
    // methodologyEl.style.display = "none";
    //outputEl.style.display = "none";
  } else {
    impEl.style.display = "none";
  }
}
