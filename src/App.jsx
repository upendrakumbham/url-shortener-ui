
import UrlForm from "./components/UrlForm";
import UrlList from "./components/UrlList.jsx";
import {useState} from "react";

function App() {
    const [refresh, setRefresh] = useState(false);
    return (
        <div>
            <UrlForm onSuccess={() => setRefresh(prev => !prev)} />
            <UrlList refresh={refresh} />
        </div>
    );
}

export default App;