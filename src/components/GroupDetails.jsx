import React from 'react';
import { useLoaderData, Link, useNavigation } from 'react-router';
import { BsCalendar2DateFill, BsPeopleFill } from 'react-icons/bs';
import { FaLocationDot } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { VscOrganization } from "react-icons/vsc";
import Loader from './Loader';

const GroupDetails = () => {
    const group = useLoaderData();
    const navigation = useNavigation();
    const {
        _id,
        groupName,
        category,
        description,
        imageUrl,
        location,
        startDate,
        members,
        organizer,
        additionalInfo,
        upcomingEvents
    } = group;

    if (navigation.state === "loading") {
        return <Loader fullScreen />;
    }

    const isGroupActive = new Date(startDate) >= new Date();

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 pt-20">
            <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="md:w-1/2">
                    <img
                        src={imageUrl}
                        alt={name}
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
                <div className="md:w-1/2">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="badge bg-green-600 text-white text-lg">
                            {category}
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{groupName}</h1>
                    <p className="text-lg mb-6">{description}</p>

                    <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-lg">
                            <BsCalendar2DateFill className='text-green-600 text-xl' />
                            <span className="font-medium">Start Date:</span> {startDate}
                        </div>
                        <div className="flex items-center gap-2 text-lg">
                            <FaLocationDot className='text-green-600 text-xl' />
                            <span className="font-medium">Location:</span> {location}
                        </div>
                        <div className="flex items-center gap-2 text-lg">
                            <HiUserGroup className='text-green-600 text-xl' />
                            <span className="font-medium">Members:</span> {members?.length || 0}
                        </div>
                        <div className="flex items-center gap-2 text-lg">
                            <VscOrganization className='text-green-600 text-xl' />
                            <span className="font-medium">Organizer:</span> {organizer?.name || 'Not specified'}
                        </div>
                    </div>

                    {isGroupActive ? (
                        <button className="btn btn-primary bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg">
                            Join Group
                        </button>
                    ) : (
                        <button className="btn btn-primary bg-gray-400 text-white px-6 py-3 text-lg" disabled>
                            Group Ended
                        </button>
                    )}
                </div>
            </div>

            {additionalInfo && (
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 border-b pb-2">About This Group</h2>
                    <div className="prose max-w-none">
                        {additionalInfo}
                    </div>
                </div>
            )}

            {upcomingEvents?.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 border-b pb-2">Upcoming Events</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {upcomingEvents.map(event => (
                            <div key={event._id} className="card bg-base-100 shadow-sm border">
                                <div className="card-body">
                                    <h3 className="card-title text-xl">{event.name}</h3>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <BsCalendar2DateFill className='text-green-600' />
                                        {event.date}
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                                        <FaLocationDot className='text-green-600' />
                                        {event.location}
                                    </div>
                                    <p className="mb-4">{event.description}</p>
                                    <button className="btn btn-outline btn-primary">
                                        RSVP
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 border-b pb-2">Group Members ({members?.length || 0})</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {members?.map(member => (
                        <div key={member._id} className="flex flex-col items-center">
                            <div className="avatar mb-2">
                                <div className="w-16 rounded-full">
                                    <img src={member.avatar || '/default-avatar.png'} alt={member.name} />
                                </div>
                            </div>
                            <span className="font-medium text-center">{member.name}</span>
                            {member.role === 'organizer' && (
                                <span className="badge badge-sm bg-green-100 text-green-800">Organizer</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-8">
                <Link to="/allgroups" className="link link-primary text-lg">
                    ← Back to All Groups
                </Link>
            </div>
        </div>
    );
};

export default GroupDetails;