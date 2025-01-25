// Portfolio Data
const portfolioData = {
  1: {
      name: "Mg Mg",
      position: "CEO",
      experience: [
          "10+ years in business leadership.",
          "Expert in corporate strategy and management.",
          "Successfully managed multiple international projects."
      ],
      image: "assets/images/member1.png"
  },
  2: {
      name: "Ma Ma",
      position: "CTO",
      experience: [
          "8+ years in software development.",
          "Specialist in AI and cloud computing.",
          "Developed cutting-edge tech solutions for global clients."
      ],
      image: "assets/images/member2.jpg"
  }
  // Add more member data as needed
};

// Load Portfolio Content
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const memberId = params.get("member");

  const portfolioContent = document.getElementById("portfolio-content");

  if (portfolioData[memberId]) {
      const { name, position, experience, image } = portfolioData[memberId];

      portfolioContent.innerHTML = `
          <img src="${image}" alt="${name}" class="w-40 h-40 mx-auto rounded-full shadow-md mb-4">
          <h3 class="text-xl font-bold">${name}</h3>
          <p class="text-blue-600">${position}</p>
          <ul class="mt-4 text-left list-disc list-inside text-sm text-blue-800">
              ${experience.map(exp => `<li>${exp}</li>`).join("")}
          </ul>
      `;
  } else {
      portfolioContent.innerHTML = `<p class="text-red-500">Portfolio not found. Please check the URL.</p>`;
  }
});
