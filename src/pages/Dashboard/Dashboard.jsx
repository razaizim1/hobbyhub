import React from 'react';
import { Link, Outlet } from 'react-router';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <Link to="" className="hover:bg-gray-700 rounded px-3 py-2">Overview</Link>
          <Link to="all-items" className="hover:bg-gray-700 rounded px-3 py-2">All Items</Link>
          <Link to="add-item" className="hover:bg-gray-700 rounded px-3 py-2">Add Item</Link>
          <Link to="my-items" className="hover:bg-gray-700 rounded px-3 py-2">My Items</Link>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard; 