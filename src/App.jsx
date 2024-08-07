//@ts-ignore ignore typescript issues with import.meta
import axios from "axios";
import React from "react";
import Customer from "./components/customer";

function App() {
    const apiBaseURL = "http://localhost:4000";
    // if (!apiBaseURL) {
    //     throw new Error("missing import.meta.env.BASE_URL");
    // }
    // console.log(apiBaseURL);

    const [displayedCustomer, setDisplayedCustomer] = React.useState(null);
    const [inputFields, setInputFields] = React.useState({
        searchByID: "",
        addCustomer: "",
    });

    function handleInputChange(event) {
        const { name, value } = event.target;
        setInputFields((prevTextFieldValues) => ({
            ...prevTextFieldValues,
            [name]: value,
        }));
    }

    const handleSearch = async () => {
        const searchURL =
            apiBaseURL + `/customerLoyalty/${inputFields.searchByID}`;
        const newSearchResult = await axios.get(searchURL);
        console.log(newSearchResult.data);
        setDisplayedCustomer(newSearchResult.data);
        setInputFields((prevInputFields) => ({
            ...prevInputFields,
            searchByID: "",
        }));
    };

    const handleAddNewCustomer = async () => {
        const newCustURL = apiBaseURL + "/customerLoyalty";
        const headers = null;
        const customerName = { name: inputFields.addCustomer };
        const CustAddResult = await axios.post(
            newCustURL,
            customerName,
            headers,
        );
        console.log(CustAddResult);
        setInputFields((prevInputFields) => ({
            ...prevInputFields,
            addCustomer: "",
        }));
    };

    return (
        <div>
            <h1>Coffee App</h1>

            <h4>Please enter the customer ID</h4>
            <input
                name="searchByID"
                onChange={handleInputChange}
                value={inputFields.searchByID}
            ></input>
            <button onClick={handleSearch}>Search</button>
            {displayedCustomer && Customer(displayedCustomer)}
            <div>
                <input
                    name="addCustomer"
                    onChange={handleInputChange}
                    value={inputFields.addCustomer}
                ></input>
                <button onClick={handleAddNewCustomer}>
                    Add New Customer!
                </button>
            </div>
        </div>
    );
}

export default App;
