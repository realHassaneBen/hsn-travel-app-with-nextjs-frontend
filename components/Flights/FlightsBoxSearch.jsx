import React from "react";
import { Label, TextInput, Dropdown, Button, Card } from "flowbite-react";
import DatePicker from "../DatePicker";

const FlightsBoxSearch = () => {
    return (
        <div>
            <Card>
                <form className="flex gap-1">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="from"
                                value="Country, city or airport"
                            />
                        </div>
                        <div>
                            <TextInput
                                id="from"
                                type="text"
                                placeholder="Country, city or airport"
                                required={true}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="to"
                                value="Country, city or airport"
                            />
                        </div>
                        <div>
                            <TextInput
                                id="to"
                                type="text"
                                placeholder="Country, city or airport"
                                required={true}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="depart"
                                value="Country, city or airport"
                            />
                        </div>
                        <div>
                            <DatePicker placeholder="Depart" />
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="return"
                                value="Country, city or airport"
                            />
                        </div>
                        <div>
                            <DatePicker placeholder="Return" />
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="return"
                                value="Country, city or airport"
                            />
                        </div>
                        <div className="w-96">
                            <Dropdown
                                label="Dropdown button"
                                color="tranparent"
                                style={{
                                    border: "1px solid rgb(209 213 219/1)",
                                    padding: "2px",
                                }}
                            >
                                <div className="w-96">
                                    <Dropdown.Item>
                                        <div className="flex justify-between">
                                            <div className="text-xl">
                                                Adults
                                            </div>
                                            <div className="flex gap-2">
                                                <Button
                                                    pill={true}
                                                    color={"gray"}
                                                    size={"xs"}
                                                >
                                                    -
                                                </Button>
                                                <div className="text-xl">5</div>
                                                <Button
                                                    pill={true}
                                                    color={"gray"}
                                                    size={"xs"}
                                                >
                                                    +
                                                </Button>
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <div className="flex justify-between">
                                            <div className="text-xl">
                                                Adults
                                            </div>
                                            <div className="flex gap-2">
                                                <Button
                                                    pill={true}
                                                    color={"gray"}
                                                    size={"xs"}
                                                >
                                                    -
                                                </Button>
                                                <div className="text-xl">5</div>
                                                <Button
                                                    pill={true}
                                                    color={"gray"}
                                                    size={"xs"}
                                                >
                                                    +
                                                </Button>
                                            </div>
                                        </div>
                                    </Dropdown.Item>{" "}
                                    <Dropdown.Item>
                                        <div className="flex justify-between">
                                            <div className="text-xl">
                                                Adults
                                            </div>
                                            <div className="flex gap-2">
                                                <Button
                                                    pill={true}
                                                    color={"gray"}
                                                    size={"xs"}
                                                >
                                                    -
                                                </Button>
                                                <div className="text-xl">5</div>
                                                <Button
                                                    pill={true}
                                                    color={"gray"}
                                                    size={"xs"}
                                                >
                                                    +
                                                </Button>
                                            </div>
                                        </div>
                                    </Dropdown.Item>{" "}
                                    <Dropdown.Item>
                                        <div className="flex justify-between">
                                            <div className="text-xl">
                                                Adults
                                            </div>
                                            <div className="flex gap-2">
                                                <Button
                                                    pill={true}
                                                    color={"gray"}
                                                    size={"xs"}
                                                >
                                                    -
                                                </Button>
                                                <div className="text-xl">5</div>
                                                <Button
                                                    pill={true}
                                                    color={"gray"}
                                                    size={"xs"}
                                                >
                                                    +
                                                </Button>
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                </div>
                            </Dropdown>{" "}
                        </div>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default FlightsBoxSearch;
