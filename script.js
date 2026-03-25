// Crop database
const crops = [
    {
        name: "Wheat 🌾",
        season: "rabi",
        soil: ["loamy", "clay"],
        water: ["medium"],
        image: "https://images.unsplash.com/photo-1617196033548-c17bb4779b6a?auto=format&fit=crop&w=800&q=80",
        fertilizer: "Nitrogen 50kg, Phosphorus 25kg",
        costPerAcre: 20000,
        profitPerAcre: 25000,
        tips: "Sow in Nov, harvest in March."
    },
    {
        name: "Rice 🍚",
        season: "kharif",
        soil: ["clay", "loamy"],
        water: ["high"],
        image: "https://images.unsplash.com/photo-1582515073493-1e1e2d103a44?auto=format&fit=crop&w=800&q=80",
        fertilizer: "NPK 60:30:30",
        costPerAcre: 30000,
        profitPerAcre: 30000,
        tips: "Sow in June-July, harvest in Oct-Nov."
    },
    {
        name: "Sugarcane 🍬",
        season: "kharif",
        soil: ["loamy", "sandy"],
        water: ["high"],
        image: "https://images.unsplash.com/photo-1602524204251-1c4c6cf8c0f6?auto=format&fit=crop&w=800&q=80",
        fertilizer: "NPK 120:60:60",
        costPerAcre: 50000,
        profitPerAcre: 70000,
        tips: "Plant Feb-Apr, harvest after 10-12 months."
    },
    {
        name: "Watermelon 🍉",
        season: "zaid",
        soil: ["sandy", "loamy"],
        water: ["medium"],
        image: "https://images.unsplash.com/photo-1621609763761-5c28e0194b3b?auto=format&fit=crop&w=800&q=80",
        fertilizer: "Compost + NPK 10:10:10",
        costPerAcre: 10000,
        profitPerAcre: 20000,
        tips: "Plant March, harvest June. Mulch to retain moisture."
    },
    {
        name: "Maize 🌽",
        season: "kharif",
        soil: ["loamy", "sandy"],
        water: ["medium"],
        image: "https://images.unsplash.com/photo-1587223962930-4ef7e1d1cfd3?auto=format&fit=crop&w=800&q=80",
        fertilizer: "NPK 50:25:25",
        costPerAcre: 15000,
        profitPerAcre: 22000,
        tips: "Sow June, harvest September."
    }
];

// Function to suggest crops based on user input
function suggestCrops() {
    const season = document.getElementById("season").value;
    const soil = document.getElementById("soil").value;
    const water = document.getElementById("water").value;
    const area = Number(document.getElementById("area").value);

    const container = document.getElementById("crop-container");
    container.innerHTML = "";

    if (!season || !soil || !water || !area) {
        alert("Please fill all fields!");
        return;
    }

    const filteredCrops = crops.filter(crop => 
        crop.season === season &&
        crop.soil.includes(soil) &&
        crop.water.includes(water)
    );

    if (filteredCrops.length === 0) {
        container.innerHTML = "<p style='color:red; font-weight:bold;'>No suitable crops found for your farm details!</p>";
        return;
    }

    filteredCrops.forEach(crop => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${crop.image}" alt="${crop.name}">
            <div class="card-content">
                <h3>${crop.name}</h3>
                <p><strong>Fertilizer:</strong> ${crop.fertilizer}</p>
                <p><strong>Cost for ${area} acre(s):</strong> ₹${(crop.costPerAcre*area).toLocaleString()}</p>
                <p><strong>Estimated Profit for ${area} acre(s):</strong> ₹${(crop.profitPerAcre*area).toLocaleString()}</p>
                <p class="tip">Tip: ${crop.tips}</p>
            </div>
        `;

        container.appendChild(card);
    });
}