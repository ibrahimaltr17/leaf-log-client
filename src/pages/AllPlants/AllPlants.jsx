import { useLoaderData } from 'react-router';
import { useState } from 'react';
import PlantRow from '../../components/PlantRow/PlantRow';
import './AllPlant.css';

const AllPlants = () => {
  const plants = useLoaderData();
  const [sortType, setSortType] = useState('');

  const careOrder = { Easy: 1, Moderate: 2, Difficult: 3 };

  const sortedPlants = [...plants].sort((a, b) => {
    if (sortType === 'careLevel') {
      return careOrder[a.careLevel] - careOrder[b.careLevel];
    }
    if (sortType === 'nextWatering') {
      const dateA = new Date(a.nextWateringDate);
      const dateB = new Date(b.nextWateringDate);
      return dateA - dateB;
    }
    return 0; 
  });

  return (
    <div className="max-w-10/12 mx-auto py-16 space-y-10">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-green-950">All Plants</h3>
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="border border-gray-300 p-2 rounded-md"
        >
          <option value="">Sort By</option>
          <option value="careLevel">Care Level</option>
          <option value="nextWatering">Next Watering Date</option>
        </select>
      </div>

      <table className="table-auto w-full divide-y divide-gray-200 bg-white rounded-2xl">
        <thead className="p-3">
          <tr>
            <th className="text-left">Plant</th>
            <th>Category</th>
            <th>Watering Frequency</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 p-3">
          {sortedPlants.map((plant, index) => (
            <PlantRow key={index} plant={plant} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllPlants;
