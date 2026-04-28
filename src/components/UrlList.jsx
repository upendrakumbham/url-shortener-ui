import {useEffect, useImperativeHandle, useState} from "react";
import { getAllUrls, deleteUrl, redirectToFullUrl } from "../api/urlApi";

export default function UrlList({ refresh }) {
    const [urls, setUrls] = useState([]);
    const [error, setError] = useState(null);

    const fetchUrls = async () => {
        try {
            const res = await getAllUrls();
            setUrls(res.data);
        } catch (err) {
            setError("Failed to load URLs");
        }
    };

    useEffect(() => {
        fetchUrls();
    }, [refresh]); // ✅ refresh triggers reload

    const handleDelete = async (alias) => {
        try {
            await deleteUrl(alias);
            setUrls((prev) => prev.filter((u) => u.alias !== alias));
        } catch (err) {
            setError("Delete failed");
        }
    };

    return (
        <div style={{ marginTop: "30px" }}>
            <h3>All URLs</h3>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <table border="1" cellPadding="10">
                <thead>
                <tr>
                    <th>Alias</th>
                    <th>Full URL</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {urls.map((u) => (
                    <tr key={u.alias}>
                        <td>{u.alias}</td>
                        <td>{u.fullUrl}</td>
                        <td>
                            <button onClick={() => redirectToFullUrl(u.alias)}>
                                Open
                            </button>

                            <button
                                onClick={() => handleDelete(u.alias)}
                                style={{ marginLeft: "10px" }}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}