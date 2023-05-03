import React from 'react';
import Lottie from "lottie-react";
import blog from '../../../../public/90049-content-marketing.json';
const Blog = () => {
    return (
        <div className='px-10'>
      <h2 className='text-7xl title text-green-500 text-center mb-4'>Blogs</h2><hr className=' border w-6/12 text-center mx-auto' />
      <div className=' md:flex gap-8'>
     <div className=" h-3/5">
      <div className="container mx-auto my-20 w-full">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300  rounded-box bg-green-700 mb-7"
        >
          <div className="collapse-title md:text-2xl text-xl text-slate-200 font-bold">
            1.Tell us the differences between uncontrolled and controlled
            components.
          </div>
          <div className="collapse-content">
            <p className="md:text-xl text-sm text-gray-100">
             # In React, components can be either controlled or uncontrolled.
              Controlled components are those whose values are controlled by
              React, while uncontrolled components allow the user to input
              values without interference from React. In a controlled component,
              React handles the data flow from the component's input elements to
              its state. This means that any change in the input element
              triggers a state change in the component, which is then reflected
              in the UI. Controlled components are more powerful and flexible
              than uncontrolled components, but they also require more code. On
              the other hand, uncontrolled components rely on the DOM to manage
              their state. This means that the user is responsible for handling
              the input values and that React does not interfere with the state
              of the component. Uncontrolled components are simpler to use and
              require less code, but they are less flexible than controlled
              components.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-green-700 rounded-box mb-7"
        >
          <div className="collapse-title  font-medium md:text-2xl text-xl text-slate-50 ">
            2. How to validate React props using PropTypes
          </div>
          <div className="collapse-content">
            <p className="md:text-xl text-sm text-slate-50">
             # React provides a built-in utility called PropTypes that allows
              developers to validate the types of props passed to a component.
              PropTypes can be used to specify the type of each prop and whether
              it is required or not. This can help catch errors and bugs early
              on in the development process. To use PropTypes, first import it
              from the 'prop-types' package. Then, define the propTypes object
              inside the component and list out the names and types of the props
              that should be passed to the component .
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-green-700 rounded-box mb-7"
        >
          <div className="collapse-title md:text-2xl text-xl text-slate-50 font-medium">
            3. Tell us the difference between nodejs and express js.
          </div>
          <div className="collapse-content">
            <p className="md:text-xl text-sm text-slate-50">
             # Node.js and Express.js are both popular server-side JavaScript
              frameworks, but they have different purposes and functionalities.
              Node.js is a runtime environment for JavaScript that allows
              developers to run JavaScript code outside of the browser. It is
              used for building scalable, fast, and efficient server-side
              applications. Node.js provides several built-in modules that
              enable developers to handle tasks such as file I/O, networking,
              and event-driven programming. Express.js, on the other hand, is a
              web application framework built on top of Node.js. It provides a
              set of tools and features for building web applications, including
              routing, middleware, and templating engines. Express.js is
              designed to simplify the process of building web applications in
              Node.js by providing a more structured approach. While Node.js is
              a more general-purpose framework that can be used for a wide range
              of tasks, Express.js is specifically focused on web application
              development. Express.js is often used in combination with other
              Node.js modules to create scalable and efficient web applications.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-green-700 rounded-box "
        >
          <div className="collapse-title md:text-2xl text-xl text-slate-50 font-medium">
            4. What is a custom hook, and why will you create a custom hook?
          </div>
          <div className="collapse-content">
            <p className="md:text-xl text-sm text-slate-50">
             # A custom hook is a function that allows you to reuse stateful
              logic across multiple React components. Custom hooks allow you to
              extract common logic into a reusable function, making it easier to
              share and maintain that logic across your application. Custom
              hooks are created using the use prefix in their name, and they
              follow the same rules as regular hooks. They can use state,
              effects, context, and other hooks to encapsulate complex logic in
              a simple, reusable function. You might create a custom hook if you
              find yourself writing the same code over and over again in
              multiple components. For example, if you have multiple components
              that need to fetch data from an API, you could create a custom
              hook that encapsulates the fetch logic and returns the data and
              loading state. Custom hooks can also help you abstract away
              implementation details and make your code more modular and
              testable. By separating the logic from the components, you can
              write more focused tests that only test the behavior of the hook
              itself. In short, custom hooks are a powerful way to extract
              reusable logic from your components and make your code more
              modular and maintainable.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className='w-full my-auto'>
   <Lottie  animationData={blog} height={600} width={300} loop = {true}></Lottie>
    </div>
        </div>
  </div>
    );
};

export default Blog;