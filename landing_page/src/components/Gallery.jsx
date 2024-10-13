import React from "react";

export const Gallery = () => {
  const images = [
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/prod_1.jpeg",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/prod_2.jpeg",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/prod_3.jpeg",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/study_4.png",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/study_3.png",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/study_2.png",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/study.png",
    },
    {
      imge: "https://thenbatech.com/static/assets/images/project/UI_2.jpeg",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/UI_1.jpeg",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/UI.jpeg",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/CMS_1.jpeg",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/CMS_3.jpeg",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/CMS_2.jpeg",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/CMS.jpeg",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/Study(SEO).png",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/sita.png",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/sita_5.png",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/sita_4.png",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/sita_3.png",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/sita_2.png",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/skill_3.jpeg",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/skill_7.jpeg",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/skill_4.jpeg",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/skill_5.jpeg",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/journey_3.jpeg",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/journey_1.jpeg",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/gaming_1.jpeg",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/gaming_2.jpeg",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/tg_bot_4.png",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/tg_bot_1.png",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/tg_bot_3.png",
    },
    {
      imge: "https://www.thenbatech.com/static/assets/images/project/kijiji_1.png",
    },
  ];

  return (
    <div className="bg-white text-center mt-16">
      <div className="py-16 bg-white">
        {/* Heading Section */}
        <div className="w-screen h-72 bg-orange-500 text-white flex items-center justify-center">
          <h2 className="text-5xl font-bold p-3">Building Great Products</h2>
        </div>

        {/* Image Gallery Section */}
        <div className=" -mt-20 flex w-screen h-full justify-center items-center ">
          <div className=" overflow-hidden rounded-lg shadow-lg grid grid-cols-2 ">
          {
            images.map((immg)=>
              <img
              src={immg.imge}
              alt="Image 1"
            className="w-full h-full p-8"
            />
            )
          }
            
          </div>
        </div>
      </div>
    </div>
  );
};
