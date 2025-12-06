import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import {AuthProvider} from "./context/AuthContext";
import "./styles/global.css";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
