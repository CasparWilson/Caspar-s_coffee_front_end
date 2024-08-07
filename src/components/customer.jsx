export default function Customer(props) {
    console.log(props);
    return (
        <div>
            <p>
                {props.name} has {props.stamps} stamps
            </p>
            <p>They can redeem {Math.floor(props.stamps / 6)} coffees</p>
            <button>Add a stamp</button>
            <button>Redeem a coffee</button>
        </div>
    );
}
