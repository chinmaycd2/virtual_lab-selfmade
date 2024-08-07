import React, { useState } from 'react';

// Define a type for the user
interface User {
  id: number;
  name: string;
  profession: string;
  image: string;
}

const users: User[] = [
  { id: 1, name: 'Arun Gawli', profession: 'Engineer', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHr74Pjdj__bQPnZK-BFujbwgnP1t5PIqkig&s' },
  { id: 2, name: 'John cena', profession: 'Designer', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOGZpFZKQVdkcFBqhV0apckEr6CQk4s6bB_Q&s' },
  { id: 3, name: 'Virat Kohli', profession: 'Developer', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHr74Pjdj__bQPnZK-BFujbwgnP1t5PIqkig&s' },
  { id: 4, name: 'David Brown', profession: 'Manager', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOGZpFZKQVdkcFBqhV0apckEr6CQk4s6bB_Q&s' },
];

const placeholderImage = 'https://via.placeholder.com/150'; // Default placeholder image URL

const Assistance: React.FC = () => {
  const [text, setText] = useState('');
  const [coins, setCoins] = useState('');
  const [isSmeChecked, setIsSmeChecked] = useState(false);
  const [userCheckState, setUserCheckState] = useState<Record<number, boolean>>({});

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleCoinsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoins(e.target.value);
  };

  const handleCheckboxChange = (id: number) => {
    setUserCheckState(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleSmeCheckboxChange = () => {
    setIsSmeChecked(prevState => !prevState);
  };

  const handleSendClick = () => {
    alert(`Text: ${text}, Coins: ${coins}, SME Checked: ${isSmeChecked}, User Check States: ${JSON.stringify(userCheckState)}`);
    // Add your send logic here
  };

  return (
    <div className="p-4 space-y-4">
      {/* First line: Text input */}
      <div className="flex">
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter text"
          className="flex-1 p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="flex items-center justify-between">
        <input
          type="text"
          value={coins}
          onChange={handleCoinsChange}
          placeholder="Coins"
          className="w-24 p-2 border border-gray-300 rounded"
        />
        <label className="flex items-center space-x-1">
          <input
            type="checkbox"
            checked={isSmeChecked}
            onChange={handleSmeCheckboxChange}
            className="form-checkbox"
          />
          <span>SME</span>
        </label>
        <button
          onClick={handleSendClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>

      {/* User list */}
      <div className='overflow-y-auto h-[300px] scrollbar-hide'>
        {users.map(user => (
          <div key={user.id} className="flex items-center justify-between border-b border-gray-400 mb-4 p-4">
            <img
              src={user.image || placeholderImage}
              alt={user.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1 ml-4">
              <div className="font-bold">{user.name}</div>
              <div className="text-gray-600">{user.profession}</div>
            </div>
            <div>
              <input
                type="checkbox"
                checked={userCheckState[user.id] || false}
                onChange={() => handleCheckboxChange(user.id)}
                className="form-checkbox"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assistance;
