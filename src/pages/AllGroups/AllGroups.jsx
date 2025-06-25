import React from 'react';
import { useLoaderData, useNavigation } from 'react-router';
import { Link } from 'react-router';
import { BsCalendar2DateFill } from 'react-icons/bs';
import { FaLocationDot } from "react-icons/fa6";
import Loader from '../../components/Loader';

const AllGroups = () => {
    const allGroups = useLoaderData();
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <Loader fullScreen />;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">All Groups</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allGroups.map(group => {
                    const { _id, groupName, category, description, imageUrl, location, startDate } = group;
                    return (
                        <div key={_id} className="card bg-base-100 shadow-sm">
                            <figure>
                                <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl">
                                    {groupName}
                                </h2>
                                <div className="flex gap-2 mb-2">
                                    <div className="badge bg-green-600 text-white">
                                        {category}
                                    </div>
                                </div>
                                <p className='text-[16px] line-clamp-2'>{description}</p>
                                <div className="py-2">
                                    <div className="text-[16px] text-gray-500 flex items-center gap-2">
                                        <BsCalendar2DateFill className='text-green-600' />
                                        {startDate}
                                    </div>
                                    <div className="text-[16px] text-gray-500 flex items-center gap-2">
                                        <FaLocationDot className='text-green-600' /> {location}
                                    </div>
                                </div>
                                <Link to={`/groupdetails/${_id}`}>
                                    <button
                                        className="mt-4 px-4 py-2 rounded-lg text-white cursor-pointer bg-green-600 hover:bg-green-700 transition-colors"
                                    >
                                        See More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AllGroups;