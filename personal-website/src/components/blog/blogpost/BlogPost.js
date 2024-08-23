import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./BlogPost.css";
import { IoMdArrowRoundBack } from "react-icons/io";

const blogPosts = {
    1: {
        title: "Celestial Image Classification",
        date: "Aug 30, 2024",
        readTime: "5 min read",
        content: `
            <h2 id="intro"><strong>Introduction</strong></h2>
            <p>Learn about how you can train a machine learning model to categorise & determine different types of celestial objects from satellite images.</p>
            <h2 id="basics"><strong>Basics of Image Classification</strong></h2>
            <p>This tutorial covers the basics of image classification, the datasets used, and the results obtained.</p>
            <h2 id="datasets">Datasets Used</h2>
            <p>We used various satellite images datasets to train the model.</p>
        `,
        tags: ["Machine Learning", "AI"],
        toc: [
            { id: "intro", title: "Introduction" },
            { id: "basics", title: "Basics of Image Classification" },
            { id: "datasets", title: "Datasets Used" }
        ]
    },
    2: {
        title: "Building Your Online Portfolio",
        date: "Aug 15, 2024",
        readTime: "10 min read",
        content: `
            <h2 id="intro">Introduction</h2>

            <p>
            In today’s competitive job market, and ever-evolving tech landscape having an online portfolio can aid in showcasing your skills, 
            projects, and professional journey in a unique way. It serves as a digital resume that can help you stand out in 
            your field. I recently built & deployed my own personal portfolio website and I wanted to share my process, findings and any tips I'd recommend to other developers
            looking to build one of their own.
            </p>

            <p>
            I want to make it clear that while creating a personal portfolio can be beneficial, especially for juniors or developer with little to no work experience, it's 
            important to manage your expectations. A portfolio itself is not a project that will typically impress potential employers, nor is it 
            something that should be listed as a project on your resume.
            </p>

            <p>
            Unless you're applying for a design-heavy role, most companies will not be overly concerned with your portfolio's presentation. What truly 
            matters is its content. You will want to include real-world projects that demonstrate your ability to actually solve problems for others, whether 
            through freelance work, contributions to open source code, or other relevant experiences.
            </p>

            <p>
            That being said, building an online portfolio is still a valuable exercise. It can help you learn to code, familiarize yourself with a framework, and 
            provides you with a platform to showcase your work. Just keep in mind, it should not replace your actual project experience but complement it by 
            highlighting your practical skills and contributions.
            </p>
    
            <h2 id="why-build">Why Build an Online Portfolio?</h2>
            <ul>
                <li ><strong>First Impressions Matter:</strong> Your portfolio is often the first thing potential employers or clients see. A 
                well-designed & functional portfolio can make a lasting impression and set you apart from the competition.</li> 
                <li ><strong>Showcase Your Skills:</strong> You can showcase your completed or ongoing projects, highlight your technical skills,
                 and provide context for your work such as video demos, screenshots or repository links.</li> 
                <li ><strong>Control Your Brand:</strong> Your portfolio is part of your personal brand. Building it gives you complete control over
                 how you present yourself, which is essential in today's world where your online presence can be make or break for career 
                 opportunities.</li> 
                <li ><strong>Continuous Learning:</strong> Building your own online portfolio allows you to stay up to date & sharp with the latest 
                design trends and demonstrate your proficiency using web development technologies & frameworks. </li> 
            </ul>

            <h2 id="design-planning">Design and Planning</h2>

            <p>Design is a critical aspect of your portfolio. A well-designed site not only looks professional but also enhances the user experience, making it easier for visitors to navigate and understand your work.</p>

            <h3>Choose a Framework</h3>

            <img src='/personal-website/frontend-frameworks.png' alt="Frontend framework examples" style="border-radius: 10px; "/>
            </br>

            <p>
            One of the first decisions to be made is choosing the best framework or language to use. Your choice should depend on factors 
            such as your familiarity with the technology, the complexity of the portfolio you want to build, and who your target audience will be. 
            For example, a web developer may want to use a modern JavaScript framework like React or Vue.js. Backend developers might choose a 
            framework like Django, or Ruby on Rails which allows backend logic integration with your site.
            These cases allow developers to showcase their skills in a relevant technology. 
            </p>

            <p>
            If you're not sure which framework to use, try considering the following:
            </p>
            
            <ul>
                <li><strong>Assess Your Skills:</strong> Try choosing a framework that aligns with your current skill level and the proficiencies you 
                want to highlight. If you're comfortable writing code in JavaScript for example, React might be a good choice. If you want to showcase full-stack capabilities, 
                consider a full-stack framework like Next.js. Portfolio websites are generally static front-end applications which don't require server-side processing. </li>
                <li><strong>Consider Future Upkeep & Maintenance:</strong> Choose a tool that you’ll be comfortable maintaining with in the future & updating 
                as your skills grow and your portfolio evolves.</li>
                <li><strong>Explore Examples:</strong> Most widely-used framworks have active communities, with vast resources & documentation on 
                tutorials, and external libraries which can aid you in the development process. I'd suggest you explore a range of different 
                portfolios built using different frameworks to get a grasp of what styles and features might resonate the most with you. 
                Websites such as <a href="https://www.bestfolios.com/portfolios" target="_blank">Bestfolios</a>, <a href="https://portfolio.adobe.com/examples/">Adobe Portfolios</a>, <a href="https://github.com/emmabostian/developer-portfolios">Github Portfolios</a> or <a href="https://dribbble.com/" 
                target="_blank">Dribbble</a> can offer inspiration for your own development.</li>
            </ul>

            <h3>Target Your Audience</h3>

            <img src='/personal-website/targetaudience.png' alt="Identifying Audience" style="border-radius: 10px; "/>
            </br>

            <p>An important aspect to the design of your portfolio is to focus on the people who will be viewing it, as they are who you want to
             showcase your abilities to. For example, if you're a developer, your audience might include potential recruiters, employers, colleagues or 
             other developers. Understanding your audience will help you make informed decisions about what content is worth including, aiding your 
             decisions for how you implement your portfolios design & functionality. </p>

            <h3 id="content">Outline Your Content</h3>

            <p>
            After you've identified your audience and chosen a framework to use, the next step is to outline the content you want to show on your 
            portfolio. Just like CV or resume, your goal should be to present your skills and experience in a way that is clear, concise, and engaging. 
            Your portfolio should tell the story of your professional journey so far.
            </p>

            <p>
            Here are some common sections used by developers:
            </p>

            <ul>
                <li><strong>Home/Hero:</strong> Your home page is usually the first thing anyone visiting your portfolio will see. It is good practice
                to include a brief introduction to who you are and what you do. You want to make a lasting impression to visitors, so ensure you make
                take time to think of your home page's design & make it impactful. You can use things like a strong headline, a professional photo, 
                and a short bio.</li>
                <li><strong>About:</strong> In an about page you can go into more detail about your background, experience, and interests. This section 
                can tell a story of things such as your professional history, skills, accomplishments, or any personal interests related to your work.</li>
                <li><strong>Projects:</strong> It's essential to showcase your best work on your portfolio. As a software engineer your target 
                audience will want to see practical projects which demonstrate your ability to solve real-world problems. Other relevant experience 
                such as freelance work or contributions to open source code can be shown too. It can also be helpful to include concise descriptions,
                images, and links to live project demo's or source code. For each project it's important to include summary of your role, the
                technologies used, and the challenges you overcame.</li>
                <li><strong>Contact:</strong> It's common to display how your website visitors can get in touch with you, including things like social media
                links, contact information or a contact form. This will make it easy for visitors to reach out with inquiries, collaboration requests or job offers.</li>
                <li><strong>Blog:</strong> Blogs are not uncommon within personal portfolios. Having one can give you a means to share your insights,
                code tutorials, or industry-related thoughts on anything interests you. Blog posts can allow you to go into more in-depth detail on
                the projects you have worked on. Regularly blogging can also demonstrate your expertise and keep your portfolio looking active & new. 
                A blog can be included separate to your portfolio however so consider this an optional section.</li>
            </ul>

            <p>
            As you outline your content, focus on showcasing your main strengths. You want to highlight projects and experience that is most relevant
            to the roles you may be seeking. Remember it's quality over quantity, so choose a set of standout projects rather than overwhelming 
            visitors with too much information.
            </p>

            <h2 id="development-implementation">Development and Implementation</h2>

            <p>
            Ensure you choose an appropriate code editor to develop your portfolio in. I'm used to front-end development with <a href="https://code.visualstudio.com/"
            target="_blank" rel="noopener noreferrer">Visual Studio Code</a>, so that's what I chose. Utilising version control is essential, so familiarise
            yourself with the basics of <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git</a> and use it with a project storage platform
            such as <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a> or <a href="https://bitbucket.org/"
            target="_blank" rel="noopener noreferrer">BitBucket</a> for collaboration and hosting your code. As you develop your portfolio, make 
            regular commits with meaningful messages to ensure your progress is well-documented. This not only helps with tracking incremental
            changes but can also allow you to revert to any previous versions easily, if you encounter bugs or need to backtrack.
            </p>

            <h3 id="brand">Establishing Your Personal Brand</h3>
            <p>Your portfolio should reflect your unique personal brand. This includes:</p>
            <ul>
                <li><strong>Consistency:</strong> Maintain a cohesive look across all sections of your portfolio by using consistent colors, typography, and design elements.</li>
                <li><strong>Design Mockups:</strong> Experiment with different designs before coding by using tools like <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">Figma</a> or <a href="https://www.adobe.com/products/xd.html" target="_blank" rel="noopener noreferrer">Adobe XD</a>.</li>
                <li><strong>Styling:</strong> Consider using plain CSS, CSS modules, or CSS-in-JS libraries like <a href="https://styled-components.com/" target="_blank" rel="noopener noreferrer">Styled Components</a> to style your portfolio. Choose the approach that best fits your project and workflow.</li>
            </ul>

            <h3 id="navigation">Designing for Navigation and Responsiveness</h3>
            <p>A well-designed navigation system enhances user experience:</p>
            <ul>
                <li><strong>Navigation:</strong> Ensure that your portfolio is easy to navigate with clear, intuitive menus. Implement a sticky header so that visitors can access the navigation menu at all times.</li>
                <li><strong>Routing:</strong> Use a framework like react-router-dom to create a single-page application (SPA) with smooth transitions between sections.</li>
                <li><strong>Responsiveness:</strong> Ensure your portfolio looks great on all devices, from smartphones to desktops. Test your site on multiple devices to provide a consistent experience. You can use CSS frameworks like <a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">Bootstrap</a> or <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">Tailwind CSS</a> to speed up development and ensure responsive design.</li>
            </ul>

            <h3 id="component-architecture">Building Modular Components</h3>
            <p>Adopting a modular approach makes it easier to manage and update your portfolio:</p>
            <ul>
                <li><strong>Reusable Components:</strong> Break down your portfolio into reusable components. For example, create separate components for the header, footer, project cards, and blog posts. This modular approach is particularly relevant for modern JavaScript frameworks like React or Vue.js.</li>
            </ul>

            <h3 id="visuals">Enhancing Visual Appeal</h3>
            <p>Visual elements can significantly impact how users perceive your portfolio:</p>
            <ul>
                <li><strong>Images and Icons:</strong> Use high-quality icons from libraries like <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">Font Awesome</a> or <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer">Flaticon</a>. For stock photos, check out platforms like <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a> or <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer">Pexels</a>.</li>
                <li><strong>Animations:</strong> Integrate smooth, modern animations using <a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer">Framer Motion</a> to enhance user experience without overwhelming it. For example, you can animate project cards as they come into view or add hover effects to navigation links.</li>
            </ul>

            <h3 id="animations">Final Touches</h3>
            <p>After the core development, it's time to add the final touches:</p>
            <ul>
                <li><strong>Additional Animations:</strong> Use <a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer">Framer Motion</a> to add more complex animations, like transitions between sections or subtle hover effects that enhance user interactivity.</li>
            </ul>

            <h2 id="resources">Inspiration and Examples</h2>
            <p>If you ever feel like you're hitting a brick wall, look at other examples to draw inspiration from. There a hundreds of thousands of
            examples of other developer portfolios online. Here are some useful resources you can use to explore:</p>
    
            <h3>Portfolio Examples</h3>
            <ul>
                <li><a href="https://www.awwwards.com/websites/portfolio/" target="_blank" rel="noopener noreferrer">Awwwards</a>: A showcase of award-winning websites, including portfolios.</li>
                <li><a href="https://www.bestfolios.com/" target="_blank" rel="noopener noreferrer">Bestfolios</a>: A curated collection of portfolios by designers and developers.</li>
                <li><a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">Dribbble</a>: A platform for designers to share their work and get feedback.</li>
                <li><a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">Behance</a>: An online community showcasing creative work in various fields.</li>
            </ul>
    
            <h3>Helpful Tutorials</h3>
            <ul>
                <li><a href="https://reactjs.org/tutorial/tutorial.html" target="_blank" rel="noopener noreferrer">React Official Tutorial</a>: Learn the basics of React and how to build simple applications.</li>
                <li><a href="https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/" target="_blank" rel="noopener noreferrer">FreeCodeCamp's React Handbook</a>: A comprehensive guide to getting started with React.</li>
                <li><a href="https://www.codecademy.com/learn/react-101" target="_blank" rel="noopener noreferrer">Codecademy React Course</a>: An interactive course that teaches React fundamentals.</li>
                <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener noreferrer">CSS Tricks Flexbox Guide</a>: Learn how to use Flexbox for layout and alignment.</li>
            </ul>
                
            <h2 id="deployment">Deploying Your Portfolio</h2>
            <p>Once your portfolio is ready, it’s time to deploy it so that it’s accessible to the world. There are several hosting options available:</p>
    
            <ul>
                <li ><strong>GitHub Pages:</strong> GitHub Pages is a popular choice for deploying static websites. If you’re using GitHub for 
                version control, you can easily deploy your portfolio by pushing your code to a GitHub repository and enabling GitHub Pages
                 in the repository settings. You can use a custom domain with GitHub Pages by purchasing a domain from providers like 
                 <a href="https://www.namecheap.com/" target="_blank" rel="noopener noreferrer">Namecheap</a> or <a href="https://domains.google/" 
                 target="_blank" rel="noopener noreferrer">Google Domains</a>.</li> 
                <li ><strong>Google Cloud:</strong> Google cloud offers</li> 
                <li ><strong>Netlify:</strong> Netlify is another excellent choice for deploying React apps. It offers continuous deployment, 
                which means your site will automatically update whenever you push new code to your GitHub repository.Netlify also offers features 
                like form handling and serverless functions, which can add additional functionality to your portfolio.</li> 
                <li ><strong>Vercel:</strong> Vercel is known for its simplicity and ease of use, especially for deploying front-end projects. It integrates well with GitHub, providing instant previews and automatic deployments.
                Vercel also supports custom domains and provides analytics to track your site’s performance. </li> 
            </ul>
    
            <h2 id="conclusion">Conclusion</h2>
            <p>Building a personal portfolio is a rewarding experience that showcases your skills and helps you stand out in the professional world. By following the steps outlined in this guide, you can create a portfolio that not only reflects your technical abilities but also your personal brand. Remember to keep your portfolio updated with your latest projects and continue refining it as you grow in your career.</p>
        `,
        tags: ["Web Development", "Portfolio"],
        toc: [
            { id: "intro", title: "Introduction" },
            { id: "why-build", title: "Why Build an Online Portfolio?" },
            { id: "design-planning", title: "Design and Planning" },
            { id: "development-implementation", title: "Development and Implementation" },
            { id: "resources", title: "Finding Inspiration and Examples" },
            { id: "deployment", title: "Deploying Your Portfolio" },
            { id: "conclusion", title: "Conclusion" }
        ]
    }
    
};

const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = blogPosts[id];
    const [activeId, setActiveId] = useState("intro");

    useEffect(() => {
        const handleScroll = () => {
            const sections = post.toc.map((item) => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;

            sections.forEach((section) => {
                if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                    setActiveId(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [post.toc]);

    if (!post) {
        return <p>Post not found</p>;
    }

    return (
        <div className="blog-post-wrapper bg-blog-dot-pattern">
            <button className="back-button" onClick={() => navigate('/blog')}>
                <IoMdArrowRoundBack />
            </button>
            <div className="blog-post-container">
                <div className="blog-post-content-container">
                    <h1 className="blog-post-title"><strong>{post.title}</strong></h1>
                    <div className="blog-post-meta">
                        <span>Written by Killian Ronan • {post.date} • {post.readTime}</span>
                        <div className="blog-post-tags">
                            {post.tags.map((tag, index) => (
                                <span key={index} className="blog-post-tag"><strong>{tag}</strong></span>
                            ))}
                        </div>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/web-development_2.jpg`} alt="Classification blog post" className="post-image" />
                    <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
                <div className="blog-post-toc">
                    <h3 className='toc-header'><strong>Table of Contents</strong></h3>
                    <ul>
                        {post.toc.map((item) => (
                            <li key={item.id} className={activeId === item.id ? "active" : ""}>
                                <a href={`#${item.id}`}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
