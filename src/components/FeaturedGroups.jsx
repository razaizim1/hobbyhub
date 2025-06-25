import React from 'react';
import { Link } from 'react-router';
import { BsCalendar2DateFill } from 'react-icons/bs';
import { FaLocationDot } from "react-icons/fa6";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const FeaturedGroups = ({ group }) => {
    const { _id, groupName, category, description, imageUrl, location, startDate } = group;

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="w-full h-[350px]">
                <img
                    src={imageUrl}
                    alt={groupName}
                    className="w-full h-full object-cover rounded"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{groupName}</h2>

                <div className="flex gap-2 mb-2">
                    <span
                        className="badge bg-green-600 text-white cursor-pointer"
                        data-tooltip-id={`tooltip-category-${_id}`}
                        data-tooltip-content={`Category: ${category}`}
                    >
                        {category}
                    </span>
                    <ReactTooltip id={`tooltip-category-${_id}`} />
                </div>

                <p className='text-[16px]'>{description}</p>

                <div className="py-2 space-y-1">
                    <div
                        className="text-[16px] text-gray-500 flex items-center gap-2 cursor-pointer"
                        data-tooltip-id={`tooltip-date-${_id}`}
                        data-tooltip-content={`Starts on: ${startDate}`}
                    >
                        <BsCalendar2DateFill className='text-green-600' />
                        {startDate}
                    </div>
                    <ReactTooltip id={`tooltip-date-${_id}`} />

                    <div
                        className="text-[16px] text-gray-500 flex items-center gap-2 cursor-pointer"
                        data-tooltip-id={`tooltip-location-${_id}`}
                        data-tooltip-content={`Location: ${location}`}
                    >
                        <FaLocationDot className='text-green-600' />
                        {location}
                    </div>
                    <ReactTooltip id={`tooltip-location-${_id}`} />
                </div>

                <Link to={`/groupdetails/${_id}`}>
                    <button className="mt-4 px-4 py-2 rounded-lg text-white cursor-pointer bg-green-600">
                        See More
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedGroups;