import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';

const AllItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://b11a10-server-site.vercel.app/hobby')
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch items');
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader fullScreen />;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Items</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Owner</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item._id}>
                <td className="border px-4 py-2">{item._id}</td>
                <td className="border px-4 py-2">{item.groupName || item.name}</td>
                <td className="border px-4 py-2">{item.userEmail || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllItems; 