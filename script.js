const modalItems = document.querySelectorAll(".portfolio-item");
modalItems.forEach((item) => {
  item.addEventListener("click", function () {
    const projectId = this.getAttribute("data-project");
    const project = projects[projectId];

    if (project) {
      modalTitle.textContent = project.title;
      modalContent.innerHTML = `
        <img src="${project.images[0]}" alt="${project.title}" class="w-full h-auto rounded-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h4 class="font-semibold text-gray-900 mb-2">Projektbeschreibung</h4>
                <p class="text-gray-600">${project.description}</p>
            </div>
            <div>
                <h4 class="font-semibold text-gray-900 mb-2">Verwendete Tools</h4>
                <p class="text-gray-600">${project.tools}</p>
                <h4 class="font-semibold text-gray-900 mb-2 mt-4">Kategorie</h4>
                <p class="text-gray-600">${project.category}</p>
            </div>
        </div>
      `;
      modal.classList.add("active");
    }
  });
});