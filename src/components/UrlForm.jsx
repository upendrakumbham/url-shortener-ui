import { useState } from "react";
import {shortenUrl} from "../api/UrlApi.js";

export default function UrlForm({ onSuccess }) {
    const [fullUrl, setFullUrl] = useState("");
    const [alias, setAlias] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setResult(null);

        try {
            const response = await shortenUrl({
                fullUrl,
                customAlias: alias || null,
            });
            setResult(response.data.shortUrl);

            if (onSuccess) {
                onSuccess();
            }

        } catch (err) {
            if (err.response) {
                setError(err.response.data || "Something went wrong");
            } else {
                setError("Server not reachable");
            }
        }
    };

    return (
        <div style={{ maxWidth: "500px", margin: "auto" }}>
            <h2>URL Shortener API</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter full URL"
                    value={fullUrl}
                    onChange={(e) => setFullUrl(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Custom alias (optional)"
                    value={alias}
                    onChange={(e) => setAlias(e.target.value)}
                />

                <button type="submit">Shorten</button>
            </form>

            {result && (
                <div style={{ marginTop: "20px", color: "green" }}>
                    <strong>Short URL:</strong>{" "}
                    <a href={result} target="_blank">{result}</a>
                </div>
            )}

            {error && (
                <div style={{ marginTop: "20px", color: "red" }}>
                    <strong>Error:</strong> {error}
                </div>
            )}
        </div>
    );
}