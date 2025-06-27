import React from 'react';
import Hero from '../../components/Hero';
import Timeline from '../../components/Timeline';
import Cta from '../../components/Cta';
import { useLoaderData, useNavigation } from 'react-router';
import FeaturedGroups from '../../components/FeaturedGroups';
import Loader from '../../components/Loader';
import Stats from '../../components/Stats';

const Home = () => {
    const groups = useLoaderData();
    const navigation = useNavigation();
    // Limit to maximum 6 groups
    const displayedGroups = groups.slice(0, 6);

    if (navigation.state === "loading") {
        return <Loader fullScreen />;
    }

    return (
        <div>
            <Hero></Hero>
            <div className='bg-white dark:bg-black'>
                <div className="container mx-auto px-4 lg:px-8 py-28">
                    <div className="mb-10 text-center">
                        <h2 className="text-2xl font-semibold sm:text-4xl dark:text-white">Popular Ongoing Groups</h2>
                        <p className="mt-4 mb-8 dark:text-gray-600 dark:text-white">Discover a selection of our most active and engaging groups. Join like-minded individuals and dive into meaningful discussions.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {displayedGroups.map(group => (
                            <FeaturedGroups key={group._id} group={group} />
                        ))}
                    </div>
                </div>
            </div>
            <Stats></Stats>
            <Timeline></Timeline>
            <Cta></Cta>
        </div>
    );
};

export default Home;