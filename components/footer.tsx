import React from "react";

export default function Footer(){
    return (
        <footer
            className="
                mb-10
                px-4
                text-center
                text-gray-500
            "
        >
            <small
                className="
                    mb-2
                    text-xs
                "
            >
                &copy; 2024 Sugam Chand M. All rights reserved.
            </small>
            <p
                className="
                    text-xs
                "
            >
                <span
                    className="
                        font-semibold
                    "
                >
                    Made with ❤️ by Sugam
                </span>
            </p>
        </footer>
    );
};