import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useLoaderData } from 'react-router';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import Loader from '../../components/Loader';
import { useNavigation } from 'react-router';

const MyGroups = () => {
    const { userInfo } = useContext(AuthContext);
    const navigation = useNavigation();
    const myUser = userInfo?.email;
    const data = useLoaderData();

    const [groups, setGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState(null);

    useEffect(() => {
        const filtered = data?.filter(item => item.userEmail === myUser);
        setGroups(filtered);
    }, [data, myUser]);

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedGroup = {
            groupName: form.groupName.value,
            category: form.category.value,
            description: form.description.value,
            location: form.location.value,
            maxMembers: parseInt(form.maxMembers.value),
            startDate: form.startDate.value,
            imageUrl: form.imageUrl.value,
            userName: userInfo?.displayName,
            userEmail: userInfo?.email,
        };

        fetch(`https://b11a10-server-site.vercel.app/hobby/${selectedGroup._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedGroup),
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    Swal.fire('Updated!', 'Group updated successfully', 'success');
                    document.getElementById('update_modal').close();

                    const updatedGroups = groups.map(g =>
                        g._id === selectedGroup._id ? { ...g, ...updatedGroup } : g
                    );
                    setGroups(updatedGroups);
                }
            });
    };

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This group will be permanently deleted!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then(result => {
            if (result.isConfirmed) {
                // Proceed with deletion
                fetch(`https://b11a10-server-site.vercel.app/hobby/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('after delete data', data);

                        if (data.deletedCount) {
                            const updated = groups.filter(group => group._id !== id);
                            setGroups(updated);

                            Swal.fire('Deleted!', 'Group has been deleted.', 'success');
                        }
                    })
                    .catch(error => {
                        console.error('Delete error:', error);
                        Swal.fire('Error', 'Something went wrong while deleting.', 'error');
                    });
            }
        });
    };

    if (navigation.state === "loading") {
        return <Loader fullScreen />;
    }

    return (
        <div className="px-2 py-10 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">My Groups</h2>

            {groups?.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table w-full text-sm sm:text-base">
                        <thead className="bg-base-200 text-gray-700">
                            <tr>
                                <th>#</th>
                                <th className="hidden sm:table-cell">Image</th>
                                <th>Name</th>
                                <th className="hidden sm:table-cell">Category</th>
                                <th className="hidden md:table-cell">Location</th>
                                <th className="hidden md:table-cell">Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {groups.map((group, index) => {
                                const { _id, groupName, category, imageUrl, location, startDate } = group;
                                return (
                                    <tr key={_id}>
                                        <td>{index + 1}</td>
                                        <td className="hidden sm:table-cell">
                                            <img
                                                src={imageUrl}
                                                alt={groupName}
                                                className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded"
                                            />
                                        </td>
                                        <td className="font-medium">{groupName}</td>
                                        <td className="hidden sm:table-cell">{category}</td>
                                        <td className="hidden md:table-cell">{location}</td>
                                        <td className="hidden md:table-cell">{startDate}</td>
                                        <td>
                                            <div className="flex flex-col sm:flex-row gap-2">
                                                <button onClick={() => {
                                                    setSelectedGroup(group);
                                                    document.getElementById('update_modal').showModal();
                                                }} className="btn btn-xs sm:btn-sm bg-blue-600 text-white hover:bg-blue-700">
                                                    Update
                                                </button>
                                                <button onClick={() => handleDelete(_id)} className="btn btn-xs sm:btn-sm bg-red-600 text-white hover:bg-red-700">
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-gray-500">No groups found for your account.</p>
            )}

            {/* Modal */}
            <dialog id="update_modal" className="modal">
                <div className="modal-box max-w-2xl relative">
                    {/* DaisyUI Close Button */}
                    <button
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => document.getElementById('update_modal').close()}
                    >
                        ✕
                    </button>

                    <h3 className="font-bold text-xl mb-4">Update Group</h3>
                    {selectedGroup && (
                        <form className="space-y-6" onSubmit={handleUpdate}>
                            <div>
                                <label htmlFor="groupName" className="block text-sm font-medium text-gray-700">Group Name</label>
                                <input
                                    type="text"
                                    id="groupName"
                                    name="groupName"
                                    defaultValue={selectedGroup.groupName}
                                    placeholder="Enter group name"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Hobby Category</label>
                                <select
                                    id="category"
                                    name="category"
                                    defaultValue={selectedGroup.category}
                                    className="select select-bordered w-full"
                                    required
                                >
                                    <option value="">Select a category</option>
                                    <option value="Drawing & Painting">Drawing & Painting</option>
                                    <option value="Photography">Photography</option>
                                    <option value="Video Gaming">Video Gaming</option>
                                    <option value="Fishing">Fishing</option>
                                    <option value="Running">Running</option>
                                    <option value="Cooking">Cooking</option>
                                    <option value="Reading">Reading</option>
                                    <option value="Writing">Writing</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    defaultValue={selectedGroup.description}
                                    rows="4"
                                    placeholder="Describe your group..."
                                    className="textarea textarea-bordered w-full"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Meeting Location</label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    defaultValue={selectedGroup.location}
                                    placeholder="City or venue"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="maxMembers" className="block text-sm font-medium text-gray-700">Max Members</label>
                                <input
                                    type="number"
                                    id="maxMembers"
                                    name="maxMembers"
                                    defaultValue={selectedGroup.maxMembers}
                                    placeholder="e.g. 10"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
                                <input
                                    type="date"
                                    id="startDate"
                                    name="startDate"
                                    defaultValue={selectedGroup.startDate}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
                                <input
                                    type="url"
                                    id="imageUrl"
                                    name="imageUrl"
                                    defaultValue={selectedGroup.imageUrl}
                                    placeholder="https://example.com/image.jpg"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label htmlFor="userName" className="block text-sm font-medium text-gray-700">User Name</label>
                                <input
                                    type="text"
                                    id="userName"
                                    name="userName"
                                    value={userInfo?.displayName || ''}
                                    readOnly
                                    className="input input-bordered w-full bg-gray-100 text-gray-600"
                                />
                            </div>
                            <div>
                                <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">User Email</label>
                                <input
                                    type="email"
                                    id="userEmail"
                                    name="userEmail"
                                    value={userInfo?.email || ''}
                                    readOnly
                                    className="input input-bordered w-full bg-gray-100 text-gray-600"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="btn btn-success w-full"
                                >
                                    Update Group
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </dialog>
        </div>
    );
};

export default MyGroups;
