import React from 'react';
import "./Blog.css";
import BlogFooter from './blogfooter/BlogFooter';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
      <section className="blog-section bg-blog-dot-pattern">
        <div className="blog-header">
              <div className="header-bg">
                  <h2 className="blog-title">Welcome to my blog.</h2>
                  <p className="blog-subtitle">Explore my latest projects, posts, and analyses.</p>
              </div>
              <div className='portfolio-avatar'>
                <img src={`${process.env.PUBLIC_URL}/avatar.jpg`} alt="Killian Ronan" className="image"/>
                <div className="profile-name">Killian Ronan</div> 
                <button className="cta-button" onClick={() => window.location.href = '/'}> See My Portfolio</button>
              </div>
          </div>

          <div className="featured-posts">
            <Link to="/blog/1" className="post-card">
                <img src={`${process.env.PUBLIC_URL}/portfolio-image.png`} alt="Portfolio blog post" className="post-image" />
                <div className="post-content">
                    <div>
                      <h3 className="post-title">Building your Online Portfolio</h3>
                      <p className="post-excerpt">This tutorial will give you insights into the steps needed to create your own personal portfolio website.</p>
                    </div>
                    <div className="post-footer">
                      <span className="post-meta">Jun 25, 2024 • 12 min read</span>
                      <div className="tags">
                        <span className="tag">Web Development</span>
                      </div>
                    </div>
                </div>
            </Link>
          </div>
          <BlogFooter />
        </section>
    );
};

export default Blog;