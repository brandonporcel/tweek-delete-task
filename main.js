document.addEventListener("click", async (e) => {
  if (!e.ctrlKey) return;

  const deleteButtons = document.querySelectorAll("span.tooltip__title");
  let deleteIcon = null;

  deleteButtons.forEach((el) => {
    if (el.textContent.trim().includes("Delete")) {
      deleteIcon = el;
    }
  });

  if (!deleteIcon) {
    console.warn("No se encontró el botón de borrar");
    return;
  }

  deleteIcon.click();

  // Delay para que aparezca el modal (si es que aparece)
  await delay(500);

  const confirmBtn = document.querySelector(
    "._root_w81oo_1._colorDanger_w81oo_44"
  );
  if (confirmBtn) {
    confirmBtn.click();
    console.log("Tarea eliminada ✅");
  } else {
    console.warn("No se encontró el botón de confirmación");
  }
});

function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
