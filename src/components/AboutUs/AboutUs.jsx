import React from "react";
import photo from "../../assests/dramitjain.jpg";
import About from "../../assests/AboutUS.png";
import approch from "../../assests/approch.jpg";
export const AboutUs = () => {
  return (
    <div className="items-center">
      <div className="">
        <img src={About} alt="About" className="h-[600px] w-full" />
      </div>
      <div className="flex  p-5   gap-20">
        <div className="   flex w-1/3 justify-end  ">
          <img src={photo} alt="About Us" className="w-[400px] rounded-xl" />
        </div>
        <div className=" w-1/2">
          <div className="font-bold text-3xl mb-5">
            {" "}
            Welcome to Dr. Amit Jain’s Homeopathy Clinic
          </div>
          <div className="mb-5">
            Experience a modern approach to holistic healing at Dr. Amit Jain’s
            Homeopathy Clinic. Specializing in sex-related concerns, hair
            restoration, and dermatological care, we combine years of expertise
            with natural, patient-focused solutions to address the root causes
            of your health issues.
          </div>
          <div className="mb-5">
            Our treatments are:
            <ul>
              <li>
                <span className="font-bold">🌿 Holistic:</span> Focused on
                long-term wellness using natural homeopathic remedies.
              </li>
              <li>
                <span className="font-bold">🤝 Personalized:</span> Tailored to
                your unique needs and lifestyle.
              </li>
              <li>
                <span className="font-bold">🔒 Confidential:</span> Delivered in
                a compassionate, private environment.
              </li>
            </ul>
          </div>
          <div className="mb-5">
            Say goodbye to quick fixes and hello to real, lasting results.
            Whether you're seeking to regain confidence, enhance your
            well-being, or restore vitality, we’re here to guide you on your
            journey to optimal health.
          </div>
          <div>
            Rediscover your best self—naturally. Let’s build a healthier
            tomorrow, together. 🌟
          </div>
        </div>
      </div>
      <div className="m-16 text-lg">
        <div className="text-5xl font-bold text-blue-500">About Us</div>
        <div className="my-5 ">
          Welcome to Dr. Amit Jain’s Homeopathy Clinic, where care meets
          expertise. Specializing in the treatment of sex-related concerns, hair
          fall, and dermatological conditions, Dr. Jain brings years of
          experience and a commitment to your well-being. Our philosophy
          revolves around addressing the root causes of health challenges
          through the power of natural homeopathic remedies. We aim to not just
          treat but transform—promoting long-term wellness and enhancing your
          quality of life.
        </div>
        <div>
          At our clinic, every patient is valued and treated with compassion and
          confidentiality, ensuring a safe and supportive environment. Discover
          a path to renewed health, confidence, and vitality with our tailored
          and holistic approach. Let us be your partner in achieving a
          healthier, happier you.
        </div>
      </div>
      <div className="justify-items-center m-16">
        <div className="text-4xl font-bold text-blue-500">OUR APPROACH</div>
        <div className="flex">
        <div className="w-1/2 content-center text-lg ">
            <p className="mb-10 ">
              At Dr. Amit Jain’s Homeopathy Clinic, we take a modern, holistic
              approach to sexual health. Unlike conventional treatments,
              homeopathy provides natural, side-effect-free solutions that
              address the root cause of your concerns.
            </p>
            <p>
              We understand that every individual is unique, which is why we
              focus on more than just the symptoms. Our personalized treatment
              plans consider your physical health, emotional well-being, and
              lifestyle to create a solution that’s tailored to you. With us,
              it’s not just about treatment—it’s about empowering you to take
              charge of your health and enjoy a balanced, confident life.
            </p>
          </div>
          <div className="w-1/2">
            <img src={approch} alt="approch" />
          </div>
          
        </div>
      </div>
    </div>
  );
};
