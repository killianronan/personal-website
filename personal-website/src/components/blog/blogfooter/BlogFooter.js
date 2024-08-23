import React from 'react';
import "./BlogFooter.css";

const BlogFooter = () => {
    return (
        <footer className="simple-footer">
            <div className="blog-footer-content">
                <p>&copy; {new Date().getFullYear()} Killian Ronan. All Rights Reserved.</p>
                <div className="footer-links">
                    <a href="https://github.com/killianronan" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/killian-ronan-9b5150194/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default BlogFooter;
