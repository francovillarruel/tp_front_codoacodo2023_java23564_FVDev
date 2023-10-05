// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  function calcTotal() {
    var cantidad = parseInt(document.getElementById("cant").value);
    var descuento = parseInt(document.getElementById("desc").value);

    if (isNaN(cantidad)) {
        cantidad = 0;
    }

    var total = cantidad * 1000 * ((100 - descuento) / 100);
    document.getElementById("total").textContent = total;
}

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var cantidad = parseInt(document.getElementById("cant").value);

    if (nombre.trim() === "" || apellido.trim() === "") {
        showError("Compra no realizada, por favor, verifica los datos.");
    } else if (isNaN(cantidad) || cantidad <= 0) {
        showError("Compra no realizada, por favor, ingresa una cantidad válida de Tickets.");
    } else {
        // Simula la compra exitosa y muestra el resultado
        showSuccess(cantidad);
    }
});

function showSuccess(cantidad) {
    var resultadoContainer = document.getElementById("resultadoContainer");
    resultadoContainer.innerHTML = `
        <div class="alert alert-success" role="alert">
            Compra realizada exitosamente.<br>
            Cantidad de Tickets comprados: ${cantidad}<br>
            Total a pagar: $${document.getElementById("total").textContent}
        </div>
    `;
    resultadoContainer.classList.add("resultado-visible");
    setTimeout(function () {
        resultadoContainer.classList.remove("resultado-visible");
    }, 5000);
}

function showError(message) {
    var resultadoContainer = document.getElementById("resultadoContainer");
    resultadoContainer.innerHTML = `
        <div class="alert alert-danger" role="alert">
            ${message}
        </div>
    `;
    resultadoContainer.classList.add("resultado-visible");
    setTimeout(function () {
        resultadoContainer.classList.remove("resultado-visible");
    }, 5000);
}
