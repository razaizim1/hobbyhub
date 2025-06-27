import React, { useState } from 'react';

const AddItem = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submission logic will go here
    alert(`Item added: ${name} - ${description}`);
    setName('');
    setDescription('');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add New Item</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow max-w-md">
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full border px-3 py-2 rounded" required />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Description</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} className="w-full border px-3 py-2 rounded" required />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem; 