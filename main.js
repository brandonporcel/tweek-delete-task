document.addEventListener("click", async (e) => {
  if (e.ctrlKey) {
    const taskSelector =
      'div[aria-describedby="rbd-hidden-text-0-hidden-text-0"]';
    const selectedTask = e.target.closest(taskSelector);

    if (!selectedTask) return;

    try {
      const deleteButton = await waitForElement(
        ".sc-fnfGmV.bDLJKZ div.tooltip"
      );
      deleteButton.click();
    } catch (error) {
      console.error("Error waiting for delete button:", error);
    }
  }
});

function waitForElement(selector, timeout = 5000) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();

    function checkElement() {
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
      } else if (Date.now() - startTime > timeout) {
        reject(
          new Error(`Timeout waiting for element with selector: ${selector}`)
        );
      } else {
        setTimeout(checkElement, 100);
      }
    }

    checkElement();
  });
}
