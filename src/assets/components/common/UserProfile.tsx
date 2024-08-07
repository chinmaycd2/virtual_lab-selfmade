import React from 'react';

const UserProfile = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center gap-3">
        <img
          className="w-24 h-24 rounded-full border-2 border-gray-300"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHr74Pjdj__bQPnZK-BFujbwgnP1t5PIqkig&s"
          alt="User Profile"
        />
        <div>
          <h1 className="text-2xl font-semibold">John Cena</h1>
          <p className="text-gray-500">john@gmail.com</p>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">About Me</h2>
        <p className="text-gray-700 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis eros eu arcu scelerisque, et gravida odio venenatis.
        </p>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Social Links</h2>
        <div className="flex space-x-4 mt-2">
          <a
            href="https://twitter.com/johndoe"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/in/johndoe"
            className="text-blue-700 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
