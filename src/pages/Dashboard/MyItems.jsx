import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Loader from '../../components/Loader';

const MyItems = () => {
  const { userInfo } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userInfo?.email) return;
    setLoading(true);
    fetch('https://b11a10-server-site.vercel.app/hobby')
      .then(res => res.json())
      .then(data => {
        const myItems = data.filter(item => item.userEmail === userInfo.email);
        setItems(myItems);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch items');
        setLoading(false);
      });
  }, [userInfo]);

  if (loading) return <Loader fullScreen />;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Items</h1>
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

export default MyItems; 