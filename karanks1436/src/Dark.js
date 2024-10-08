import firebase from "./Firebase";

export default function Dark() {
    return(
        function myFunction() {
            var element = document.body;
            element.classList.toggle("dark-mode");
          }
    )
}