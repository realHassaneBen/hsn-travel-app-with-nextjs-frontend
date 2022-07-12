import React from "react";
import { Sidebar } from "flowbite-react";
import {
    HiChartPie,
    HiViewBoards,
    HiInbox,
    HiUser,
    HiShoppingBag,
    HiArrowSmRight,
    HiTable,
} from "react-icons/hi";

const SidebarScreen = () => {
    return (
        <div>
            <div className="w-fit bg-gray-50">
                <Sidebar aria-label="Default sidebar example">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item href="/flights" icon={HiChartPie}>
                                Flights
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="/hotels"
                                icon={HiViewBoards}
                                label="Pro"
                                labelColor="alternative"
                            >
                                Hotels
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiInbox} label="3">
                                Inbox
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiUser}>
                                Users
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiShoppingBag}>
                                Products
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiArrowSmRight}>
                                Sign In
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiTable}>
                                Sign Up
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
        </div>
    );
};

export default SidebarScreen;
