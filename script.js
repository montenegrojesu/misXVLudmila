// Pegá aquí el enlace compartido de la carpeta de Google Drive.
    const enlaceGoogleDrive = "PEGA_ACA_EL_LINK_DE_DRIVE";
    const botonDrive = document.getElementById("enlaceDrive");

    if (enlaceGoogleDrive !== "PEGA_ACA_EL_LINK_DE_DRIVE") {
      botonDrive.href = enlaceGoogleDrive;
      botonDrive.target = "_blank";
      botonDrive.rel = "noopener noreferrer";
    } else {
      botonDrive.addEventListener("click", function (evento) {
        evento.preventDefault();
        alert("El enlace de Google Drive se agregará aquí cuando esté disponible.");
      });
    }
    