// PlantPage.jsx
import { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, onAddPlant, onSoldOut }) {
  const [search, setSearch] = useState("");

  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />

      <Search
        search={search}
        onSearchChange={setSearch}
      />

      <PlantList
        plants={displayedPlants}
        onSoldOut={onSoldOut}
      />
    </main>
  );
}

export default PlantPage;