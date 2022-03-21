import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";
import MarkdownEditor from "./pages/mkdownedit";
import DocPage from "./pages/DocPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/mkdedit" element={<MarkdownEditor />} />
                <Route path="/" element={<DocPage />} />
            </Routes>
        </Router>
    );
}

export default App;
