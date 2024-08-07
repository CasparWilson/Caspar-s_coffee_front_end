//@ts-ignore ignore typescript issues with import.meta
import axios from "axios";
import React from "react";

function App() {
    const apiBaseURL = import.meta.env.BASE_URL;
    if (!apiBaseURL) {
        throw new Error("missing import.meta.env.BASE_URL");
    }
    console.log(apiBaseURL);

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
        </div>
    );
}

export default App;
