import { DemonstratingProps } from "./components/demo/DemonstratingProps";

//@ts-ignore ignore typescript issues with import.meta
const apiBaseURL = import.meta.env.VITE_API_BASE_URL;

function App() {
    return (
        <div>
            <h1>App component</h1>
            <DemonstratingProps />
            <p>
                The value of the environment variable VITE_API_BASE_URL is:
                <code>{apiBaseURL}</code>
            </p>
        </div>
    );
}

export default App;
