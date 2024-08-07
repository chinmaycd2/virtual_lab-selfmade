// AddBuddy.tsx
import React, { useState } from 'react';
import "../../../App.css"
// Define a type for Buddy
interface Buddy {
  id: number;
  image: string;
  name: string;
  profession: string;
  rating: number;
}

// Dummy data for buddies
const initialBuddies: Buddy[] = [
  { id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2J4oUFzsh5JGp62d1t9ec_0m0tG2I47L3Sg&s', name: 'Alice', profession: 'Developer', rating: 4 },
  { id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2J4oUFzsh5JGp62d1t9ec_0m0tG2I47L3Sg&s', name: 'Bob', profession: 'Designer', rating: 5 },
  { id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2J4oUFzsh5JGp62d1t9ec_0m0tG2I47L3Sg&s', name: 'Charlie', profession: 'Product Manager', rating: 3 },
  { id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2J4oUFzsh5JGp62d1t9ec_0m0tG2I47L3Sg&s', name: 'Bob', profession: 'Designer', rating: 5 },
  { id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2J4oUFzsh5JGp62d1t9ec_0m0tG2I47L3Sg&s', name: 'Charlie', profession: 'Product Manager', rating: 3 },
];

const AddBuddy: React.FC = () => {
  const [newBuddy, setNewBuddy] = useState<string>('');
  const [buddies, setBuddies] = useState<Buddy[]>(initialBuddies);
  const [selectedBuddies, setSelectedBuddies] = useState<Set<number>>(new Set());

  const handleAddBuddy = () => {
    if (newBuddy.trim() === '') return; // Ignore empty inputs
    // For simplicity, we're adding a new buddy with a default image and profession
    const newBuddyEntry: Buddy = {
      id: buddies.length + 1,
      image: 'https://via.placeholder.com/64',
      name: newBuddy.trim(),
      profession: 'Unknown',
      rating: 3
    };
    setBuddies([...buddies, newBuddyEntry]);
    setNewBuddy(''); // Clear the text field after adding
  };

  const handleCheckboxChange = (id: number) => {
    setSelectedBuddies(prev => {
      const newSelected = new Set(prev);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      return newSelected;
    });
  };

  return (
    <div>
      <div className="mb-4 flex justify-between">
        <input
          type="text"
          value={newBuddy}
          onChange={(e) => setNewBuddy(e.target.value)}
          placeholder="Enter buddy name"
          className="border p-2 w-[80%] rounded"
        />
        <button
          onClick={handleAddBuddy}
          className=" px-4  bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </div>
      <div className='h-[300px] overflow-y-auto scrollbar-hide'>
                {buddies.map(buddy => (
          <div key={buddy.id} className="flex items-center p-4 border rounded-lg shadow-md mb-4 ">
            <img src={buddy.image} alt={buddy.name} className="w-16 h-16 rounded-full mr-4" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{buddy.name}</h3>
              <p className="text-sm text-gray-600">{buddy.profession}</p>
              <div className="flex items-center">
                <span className="text-yellow-500">{'★'.repeat(buddy.rating)}</span>
                <span className="text-gray-400">{'★'.repeat(5 - buddy.rating)}</span>
              </div>
            </div>
            <input
              type="checkbox"
              checked={selectedBuddies.has(buddy.id)}
              onChange={() => handleCheckboxChange(buddy.id)}
              className="ml-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddBuddy;
