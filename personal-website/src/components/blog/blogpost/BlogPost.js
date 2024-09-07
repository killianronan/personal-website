import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./BlogPost.css";
import { IoMdArrowRoundBack } from "react-icons/io";

const blogPosts = {
    1: {
        title: "Building Your Online Portfolio",
        date: "Sep 06, 2024",
        readTime: "10 min read",
        content: `
            <h2 id="intro">Introduction</h2>

            <p>
            In today's competitive job market, and ever-evolving tech landscape having an online portfolio can aid in showcasing your skills, 
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
            That being said, building an online portfolio is still a valuable exercise. It can help you learn to code, familiarise yourself with a framework, and 
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

            <img src='/frontend-frameworks.png' alt="Frontend framework examples" style="border-radius: 10px; "/>
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
                <li><strong>Consider Future Upkeep & Maintenance:</strong> Choose a tool that you'll be comfortable maintaining with in the future & updating 
                as your skills grow and your portfolio evolves.</li>
                <li><strong>Explore Examples:</strong> Most widely-used framworks have active communities, with vast resources & documentation on 
                tutorials, and external libraries which can aid you in the development process. I'd suggest you explore a range of different 
                portfolios built using different frameworks to get a grasp of what styles and features might resonate the most with you. 
                Websites such as <a href="https://www.bestfolios.com/portfolios" target="_blank">Bestfolios</a>, <a href="https://portfolio.adobe.com/examples/">Adobe Portfolios</a>, <a href="https://github.com/emmabostian/developer-portfolios">Github Portfolios</a> or <a href="https://dribbble.com/" 
                target="_blank">Dribbble</a> can offer inspiration for your own development.</li>
            </ul>

            <h3>Target Your Audience</h3>

            <img src='/targetaudience.png' alt="Identifying Audience" style="border-radius: 10px; "/>
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
            Ensure you choose an appropriate code editor to develop your portfolio with. I'm used to front-end development with <a href="https://code.visualstudio.com/"
            target="_blank" rel="noopener noreferrer">Visual Studio Code</a>, but currently I'm using a new AI integrated editor forked from VS Code named <a href="https://www.cursor.com/"
            target="_blank" rel="noopener noreferrer">Cursor</a> which I've found to be very helpful. Utilising version control is essential, so familiarise
            yourself with the basics of <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git</a> and use it with a project storage platform
            such as <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a> or <a href="https://bitbucket.org/"
            target="_blank" rel="noopener noreferrer">BitBucket</a> for collaboration and hosting your code. As you develop your portfolio, make 
            regular commits with meaningful messages to ensure your progress is well-documented. This not only helps with tracking incremental
            changes but can also allow you to revert to any previous versions easily, if you encounter bugs or need to backtrack.
            </p>

            <h3 id="brand">Leverage The Power of AI</h3>

            <img src='/ai.jpg' alt="AI image" style="border-radius: 10px; "/>
            </br>

            <p>Modern software development & its future is infused with AI, meaning you should be using it to help you develop your portfolio and any other coding ventures. 
            If you are not harnessing the power of AI, then you are behind the curve. It will help speed up your development process and make you more productive. Some examples of 
            how AI can help you is with things like:</p>
            <ul>
                <li><strong>Learning:</strong> AI can be a valuable resource for learning new technologies you haven't used before. It can provide you with personalised tutorials, 
                detailed documentation, and relevant code examples which can help you understand and implement new concepts effectively & efficiently.</li>
                <li><strong>Brainstorming and Planning:</strong> If you ever feel like you're hitting a brick wall, AI can help with brainstorming and getting you back on track by generating
                creative ideas for your portfolio's design and content. It can also help you with both the high & low level architecture design of your project by creating outlines, 
                timelines, and task lists. This automation can help with ensuring there is a structured approach to your work.</li>
                <li><strong>Environment Setup:</strong> AI can fast-track your development environment setup by providing pre-configured templates and configuration files. 
                This will allow you to quickly get started on your development without having to spend an excessive amount of time on the initial setup.</li>
                <li><strong>Generating, Debugging & Optimising Code:</strong> As stated before, AI can significantly enhance your coding efficiency by generating complex snippets or entire
                modules based on your requirements. It can also assist in debugging errors, identifying bugs and suggesting fixes. Furthermore, you can use it for optimising your code
                to yield better performance.</li>
            </ul>

            <h3 id="portfolio-tips">Essential Aspects to an Impressive Portfolio</h3>
            
            <p>When developing your portfolio there are several key aspects which you need to be considering:</p>
            <ul>
                <li><strong>Consistency:</strong> Try to use consistent colors, fonts, and design elements across all sections. 
                This helps to create a cohesive and professional look, making your portfolio more visually appealing.</li>
                <li><strong>Design Mockups:</strong> It may not be necessary for a personal portfolio website, butyou can
                experiment with mockup designs using tools such as <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">Figma</a>
                or <a href="https://www.adobe.com/products/xd.html" target="_blank" rel="noopener noreferrer">Adobe XD</a>. 
                Mockups are useful as they can help you visualise the final product and make design adjustments before coding.</li>
                <li><strong>Styling & Responsiveness:</strong> For most web pages, the styling is controlled by plain CSS, CSS modules, or CSS integrated JS libraries such as 
                <a href="https://styled-components.com/" target="_blank" rel="noopener noreferrer">Styled Components</a>. 
                Deciding on a consistent styling approach ensures maintainable and scalable visuals. Keep in mind, you'll want to ensure your
                portfolio is accessible and functional on all devices. There are CSS layouts like <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener noreferrer">Flexbox</a> 
                and frameworks like <a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">Bootstrap</a>
                or <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">Tailwind CSS</a> which can help with aligning
                and styling your portfolio components.</li>
                <li><strong>Navigation & Structure:</strong> Ensure your portfolio has intuitive navigation, with clear menus
                and a header. Having seamless navigation improves user experience by making it easy for visitors to find
                information and browse your site. Remember to break down your content into different components, some reusable (cards) and some not (header, footer), as this will make your 
                codebase more modular and easier to maintain.</li>
                <li><strong>Animations & Visuals:</strong> Although this may be optional, depending on the type of portfolio you 
                want to build, I'd recommend using high-quality icons from providers such as <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">Font Awesome</a>
                or <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer">Flaticon</a>. High resolution images can also be found on websites like 
                <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a> or <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer">Pexels</a>.
                Strong visuals can enhance the overall look and feel of your portfolio.</li>
            </ul>

            <h3 id="resources">Inspiration and Examples</h3>

            <p>If you ever feel like you're hitting a brick wall, look at other examples to draw inspiration from. There are plenty of
            examples of other developer portfolios online. You can find some useful resources below:</p>

            <h4>Portfolio Examples</h4>

            <ul>
                <li><a href="https://www.awwwards.com/websites/portfolio/" target="_blank" rel="noopener noreferrer">Awwwards</a>: A showcase of award-winning websites, including portfolios.</li>
                <li><a href="https://www.bestfolios.com/" target="_blank" rel="noopener noreferrer">Bestfolios</a>: A curated collection of portfolios by designers and developers.</li>
                <li><a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">Dribbble</a>: A platform for designers to share their work and get feedback.</li>
                <li><a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">Behance</a>: An online community showcasing creative work in various fields.</li>
            </ul>
    
            <p>If you are not sure how to get started, You can find some resources to help you begin with some different web development
            frameworks below.</p>

            <h4>Tutorials and Guides</h4>

            <ul>
                <li><a href="https://reactjs.org/tutorial/tutorial.html" target="_blank" rel="noopener noreferrer">React Tutorial</a>: Learn the basics of React and how to build simple applications.</li>
                <li><a href="https://angular.io/start" target="_blank" rel="noopener noreferrer">Angular Guide</a>: Get started with Angular and learn how to build dynamic web applications.</li>
                <li><a href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer">Next.js Guide</a>: Learn how to build server-side rendered React applications with Next.js.</li>
                <li><a href="https://www.djangoproject.com/start/" target="_blank" rel="noopener noreferrer">Django Guide</a>: A beginner-friendly guide to building web applications with Django.</li>
                <li><a href="https://guides.rubyonrails.org/getting_started.html" target="_blank" rel="noopener noreferrer">Ruby on Rails Guide</a>: Learn the basics of building web applications with Ruby on Rails.</li>
            </ul>
            
            <h2 id="deployment">Deployment</h2>

            <img src='/deployment2.png' alt="Deployment image" style="border-radius: 10px; border: 1px solid #000;"/>
            </br>

            <p>Once your portfolio is ready, it's time to deploy it so that it's accessible to the world. You can use a custom domain with
            most hosting platforms by purchasing a domain from providers like <a href="https://www.namecheap.com/" target="_blank" rel="noopener noreferrer">Namecheap</a>, <a href="https://www.godaddy.com/en-ca" target="_blank" rel="noopener noreferrer">GoDaddy</a> 
            or <a href="https://domains.google/" target="_blank" rel="noopener noreferrer">Google Domains</a>. There are several hosting options available:</p>

            <ul>
                <li><strong>GitHub Pages:</strong> <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">GitHub Pages</a> is a popular choice for deploying static websites. If you're using GitHub for 
                version control, you can easily deploy your portfolio by pushing your code to a GitHub repository and enabling GitHub Pages
                in the repository settings. You're also given one free custom domain with GitHub Pages so you can use that to deploy
                your portfolio for free.</li> 
                <li><strong>Google Cloud:</strong> <a href="https://cloud.google.com/" target="_blank" rel="noopener noreferrer">Google Cloud</a> offers a robust platform for deploying web applications. Google Cloud also provides
                a free tier with some limited resources which can be used for your personal portfolios.</li> 
                <li><strong>Amazon Web Services:</strong> <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">AWS</a> provides a wide range of services for deploying and managing web applications. 
                Services such as <a href="https://aws.amazon.com/amplify/" target="_blank" rel="noopener noreferrer">Amplify</a>, <a href="https://aws.amazon.com/s3/" target="_blank" rel="noopener noreferrer">S3</a>, or <a href="https://aws.amazon.com/ec2/" target="_blank" rel="noopener noreferrer">EC2</a> can be used to host different types of websites and applications.</li> 
                <li><strong>Microsoft Azure:</strong> <a href="https://azure.microsoft.com/" target="_blank" rel="noopener noreferrer">Azure</a> is another platform which offers various services for deploying web applications. 
                <a href="https://azure.microsoft.com/en-us/services/app-service/" target="_blank" rel="noopener noreferrer">Azure App Service</a> or <a href="https://azure.microsoft.com/en-us/services/app-service/static/" target="_blank" rel="noopener noreferrer">Static Web Apps</a> can be used to host your portfolio.</li>
            </ul>

            <p> Other than the main options listed above, there are some other platforms like Netlify, Heroku, Vercel, or Surge which can also be used to deploy your portfolio. </p>
    
            <h2 id="conclusion">Conclusion</h2>

            <p>Building a personal portfolio is a rewarding experience that showcases your skills and helps you stand out in the
            professional world. A well-crafted portfolio not only reflects your technical abilities but also your personal brand,
            making a lasting impression on potential employers, clients, and collaborators. This blog post was to serve as an 
            outline on what my approach was to building my own portfolio and what I'd recommend to someone who wanted to build
            their own. If you plan to do so, remember to:</p>
            
            <ul>
                <li><strong>Keep It Consistent:</strong> Try to ensure that your portfolio maintains a cohesive look and feel, 
                with a clear structure.</li>
                <li><strong>Update Regularly:</strong> You should update your portfolio with your latest ventures, projects, skills,
                and accomplishments regularly. This will help to show that you are active and are continuously improving yourself.
                As you progress in your career, your portfolio should evolve as you do.</li>
                <li><strong>Showcase Your Best Work:</strong> Remember to focus on quality over quantity, by highlighting the 
                projects that best demonstrate your skills and expertise.</li>
                <li><strong>Personalise It:</strong> Make your portfolio stand out by adding some personal touches that reflect
                your personality and your own professional journey.</li>
                <li><strong>Seek Feedback:</strong> Don't hesitate to ask and be open for feedback from your friends, peers, or other professionals.
                The peer review process will help you refine and improve your portfolio.</li>
            </ul>
            
            <p> A dynamic and up-to-date portfolio can be a useful tool to possibly open doors to new opportunities and aid career
            aspirations. Always keep in mind, your portfolio is more than just a collection of your work; it's a showcase of who
            you are as a person & professional. Investing your time and effort into it will allow you to create the best represenation
            of yourself that you can create.</p>
            
        `,
        tags: ["Web Development", "Portfolio"],
        toc: [
            { id: "intro", title: "Introduction" },
            { id: "why-build", title: "Why Build an Online Portfolio?" },
            { id: "design-planning", title: "Design and Planning" },
            { id: "development-implementation", title: "Development and Implementation" },
            { id: "deployment", title: "Deployment" },
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

    const handleTocClick = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setActiveId(id);
        }
    };

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
                    <img src={`${process.env.PUBLIC_URL}/web-development_2.jpg`} alt="Classification blog post" style={{borderRadius: "10px"}} />
                    <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
                <div className="blog-post-toc">
                    <h3 className='toc-header'><strong>Table of Contents</strong></h3>
                    <ul>
                        {post.toc.map((item) => (
                            <li key={item.id} className={activeId === item.id ? "active" : ""}>
                                <button onClick={() => handleTocClick(item.id)}>{item.title}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <footer className="blog-post-footer">
                <p>&copy; {new Date().getFullYear()} Killian Ronan. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default BlogPost;
