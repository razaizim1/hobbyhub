import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';
import Loader from '../../components/Loader';
import { useNavigation } from 'react-router';

const CreateGroup = () => {
    const { userInfo } = useContext(AuthContext);
    const navigation = useNavigation();

    const handleCreateGroup = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const createdGroup = Object.fromEntries(formData.entries());
        console.log(createdGroup);

        fetch('https://b11a10-server-site.vercel.app/hobby', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(createdGroup)
        })
            .then(res => res.json())
            .then(data => {
                console.log('after created group', data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "center-center",
                        icon: "success",
                        title: "Group has been created Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }
            })
    };
    if (navigation.state === "loading") {
        return <Loader fullScreen />;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-2xl p-8 space-y-8 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-center text-gray-800">Create a New Hobby Group</h2>

                <form className="space-y-6" onSubmit={handleCreateGroup}>
                    <div>
                        <label htmlFor="groupName" className="block text-sm font-medium text-gray-700">Group Name</label>
                        <input
                            type="text"
                            id="groupName"
                            name="groupName"
                            placeholder="Enter group name"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4BAF47] focus:border-[#4BAF47]"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Hobby Category</label>
                        <select
                            id="category"
                            name="category"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4BAF47] focus:border-[#4BAF47]"
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
                            rows="4"
                            placeholder="Describe your group..."
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4BAF47] focus:border-[#4BAF47]"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Meeting Location</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            placeholder="City or venue"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4BAF47] focus:border-[#4BAF47]"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="maxMembers" className="block text-sm font-medium text-gray-700">Max Members</label>
                        <input
                            type="number"
                            id="maxMembers"
                            name="maxMembers"
                            placeholder="e.g. 10"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4BAF47] focus:border-[#4BAF47]"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4BAF47] focus:border-[#4BAF47]"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
                        <input
                            type="url"
                            id="imageUrl"
                            name="imageUrl"
                            placeholder="https://example.com/image.jpg"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4BAF47] focus:border-[#4BAF47]"
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
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-gray-100 text-gray-600 rounded-md"
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
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-gray-100 text-gray-600 rounded-md"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full py-3 px-4 text-white font-semibold bg-[#4BAF47] rounded-md shadow hover:bg-[#3a983c] transition duration-200"
                        >
                            Create Group
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateGroup;