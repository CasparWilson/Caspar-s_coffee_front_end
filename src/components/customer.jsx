import axios from "axios";

export default function Customer(props) {
    const apiBaseURL = "http://localhost:4000";

    const addAStamp = async () => {
        const addAStampURL =
            apiBaseURL + "/customerLoyalty/" + props.customerID + "/stamp";
        const stampResponse = await axios.patch(addAStampURL);
    };

    const redeemACoffee = async () => {
        const redeemCoffeeURL =
            apiBaseURL + "/customerLoyalty/" + props.customerID + "/freeCoffee";
        const freeCoffeeResult = axios.patch(redeemCoffeeURL);
    };

    console.log(props);
    return (
        <div>
            <p>
                {props.name} has {props.stamps} stamps
            </p>
            <p>They can redeem {Math.floor(props.stamps / 6)} coffees</p>
            <button onClick={addAStamp}>Add a stamp</button>
            <button onClick={redeemACoffee}>Redeem a coffee</button>
        </div>
    );
}
