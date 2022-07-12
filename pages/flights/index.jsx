import React from "react";
import FlightsBoxSearch from "../../components/Flights/FlightsBoxSearch";
import FlightsPageTitle from "../../components/Flights/FlightsPageTitle";

const FlightsPage = () => {
    return (
        <div className="flex flex-col gap-2">
            <FlightsPageTitle />
            <FlightsBoxSearch />
        </div>
    );
};

export default FlightsPage;
