import React from "react";
import { useState } from 'react';

function MarkdownEditor() {
    var MarkdownIt = require("markdown-it");
    var md = new MarkdownIt({
        html: true,
    });
    const [markdown, setMarkdown] = useState("");

    function createMarkup() {
        return { __html: md.render(markdown) };
    }

    function handleChangeMarkdown(event) {
        setMarkdown(event.target.value);
    }

    return (
        <div className="darkMode">
            <h1 className="text-white text-4xl mb-4 mt-2 text-center">
                Determinant Studios Flavoured Markdown
            </h1>
            <div className="flex">
                <div className="p-2 items-center">
                    <textarea
                        className="inputTxt rounded-xl mt-6 border-white border p-2"
                        cols="80"
                        rows="50"
                        required
                        placeholder="Enter you markdown here"
                        onChange={handleChangeMarkdown}
                    ></textarea>
                </div>
                <div
                    className="outputContainer m-8 border-white border rounded-xl px-4 unreset w-full"
                    dangerouslySetInnerHTML={createMarkup()}
                ></div>
            </div>
        </div>
    );
}

export default MarkdownEditor;
