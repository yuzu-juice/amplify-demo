import { useState, useEffect } from "react";

function App() {
    const [data, setData] = useState<string>("");
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://510f-240d-2-1709-3600-b18b-5fbf-fd2c-3b9a.ngrok-free.app/",
                    {
                        headers: {
                            "ngrok-skip-browser-warning":
                                "skip-browser-warning",
                        },
                    }
                );
                const text = await response.text();
                setData(text);
            } catch (err) {
                setError("Error fetching data: " + (err as Error).message);
            }
        };

        fetchData();
    }, []);

    return <div>{error ? <p>Error: {error}</p> : <p>Response: {data}</p>}</div>;
}

export default App;
