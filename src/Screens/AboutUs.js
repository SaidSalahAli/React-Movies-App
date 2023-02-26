import React from "react";
import Head from "../Components/Home/Head";
import Layout from "./../Layout/Layout";

const AboutUs = () => {

//   const goToTop = () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//     });
// };

  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title="About Us" />
        <div className="xl:py-20 py-10 px-4">
          <div className="grid grid-flow-row xl:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-xl lg:text-3xl mb-4 font-semibold">
                Welcome to our Netflix
              </h3>
              <div className="mt-3 text-sm leading-8 text-text">
                <p>
                  Paragraphs are the building blocks of papers. Many students
                  define paragraphs in terms of length: a paragraph is a group
                  of at least five sentences, a paragraph is half a page long,
                  etc. In reality, though, the unity and coherence of ideas
                  among sentences is what constitutes a paragraph. A paragrape
                  will refer to this as the “controlling idea,” because it
                  controls what happens in the rest of the paragraph.
                </p>
                <hr />

                <p>
                  Paragraphs are the building blocks of papers. Many students
                  define paragraphs in terms of length: a paragraph is a group
                  of at least five sentences, a paragraph is half a page long,
                  etc. In reality, though, the unity and coherence of idea
                  will refer to this as the “controlling idea,” because it
                  controls what happens in the rest of the paragraph.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-8 bg-dry rounded-lg ">
                  <span className="text-3xl block font-extrabold">10K</span>
                  <h4 className="text-lg font-semibold my-2  ">Listed Movies</h4>
                  <p className="md-0 text-text leading-7 text-sm ">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                </div>
                <div className="p-8 bg-dry rounded-lg ">
                  <span className="text-3xl block font-extrabold">8K</span>
                  <h4 className="text-lg font-semibold my-2  ">Lovely Usears</h4>
                  <p className="md-0 text-text leading-7 text-sm ">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
              </div>
            </div>
          </div>
          <img src="/imgs/bg2.jpg" className="w-full xl:block hidden  h-header  rounded-lg object-cover" alt=""/>

        </div>
      </div>
     </div>
    </Layout>
  );
};

export default AboutUs;
