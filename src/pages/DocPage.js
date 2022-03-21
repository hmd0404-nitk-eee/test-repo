import React from "react";
import { useState,useEffect } from "react";

import mkdwnReadme from "../docs/markdownReadme";
import typography from "../docs/typography";

function DocPage() {
    const file_name = "typography.md";
    const [currentMkdwn, setCurrentMkdwn] = useState('');

    useEffect(() => {
        import(`../docs/${file_name}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setCurrentMkdwn(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });

    var MarkdownIt = require("markdown-it");
    var md = new MarkdownIt({
        html: true,
    });
    function createMarkup(content) {
        return { __html: md.render(content) };
    }

    function handleMenuChange(event) {
        event.preventDefault();
        event.target.classList.toggle("activeMenuColor");
        if (currentMkdwn === mkdwnReadme) {
            setCurrentMkdwn(typography);
        } else {
            setCurrentMkdwn(mkdwnReadme);
        }
    }

    return (
        <div className="grid grid-cols-3 font-default">
            <div className="shadow-xl min-h-screen py-12 justify-center text-xl menuTxt w-full">
                <div className="flex flex-col items-end mb-3">
                    <span className="pr-8 border-r-4 border-white">Lorem Ipsum</span>
                    <span className="menuTxt pr-8 border-r-4 border-white">
                        Lorem Ipsum
                    </span>
                    <span className="menuTxt pr-8 border-r-4 border-white">
                        Lorem Ipsum
                    </span>
                </div>
                <hr />
                <div className="flex flex-col items-end mt-3 mb-3">
                    <span className="menuTxt pr-8 border-r-4 border-white">
                        Lorem Ipsum
                    </span>
                    <span className="menuTxt pr-8 border-r-4 border-white cursor-pointer">
                        Markdown-it Documentation Sample
                    </span>
                    <span
                        className="menuTxt pr-8 border-r-4 activeMenuColor cursor-pointer"
                        onClick={handleMenuChange}
                    >
                        Typography for SSOSEC Flavoured Markdown
                    </span>
                    <span className="menuTxt pr-8 border-r-4 border-white">
                        Lorem Ipsum
                    </span>
                </div>
                <hr />
                <div className="flex flex-col items-end mb-3 mt-3">
                    <span className="menuTxt pr-8 border-r-4 border-white">
                        Lorem Ipsum
                    </span>
                    <span className="menuTxt pr-8 border-r-4 border-white">
                        Lorem Ipsum
                    </span>
                    <span className="menuTxt pr-8 border-r-4 border-white">
                        Lorem Ipsum
                    </span>
                </div>
                <hr />
                <div className="flex flex-col items-end mt-3">
                    <span className="menuTxt pr-8 border-r-4 border-white">
                        Lorem Ipsum
                    </span>
                </div>
            </div>
            <div className="col-span-2">
                <div
                    className="p-8 ssosecFlavourMD"
                    dangerouslySetInnerHTML={createMarkup(currentMkdwn)}
                ></div>
            </div>
        </div>
    );
}

export default DocPage;
