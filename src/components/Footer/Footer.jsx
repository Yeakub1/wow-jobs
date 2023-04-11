import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <div className=" bg-black text-white">
      <div className="px-20 p-20 grid md:grid-cols-5 gap-4 justify-between ">
        <div className="">
          <h1 className="font-bold text-3xl ">WowJobs</h1>
          <p className="mt-5">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <div className="flex h-8 mt-10 ">
            <img src="https://i.ibb.co/r4wNBZT/fb-icon-325x325.png" alt="" />
            <img
              className="rounded-full ml-5 mr-5"
              src="https://i.ibb.co/KFcSbt6/download.png"
              alt=""
            />
            <img
              className="rounded-full"
              src="https://i.ibb.co/86NdMHx/png-clipart-computer-icons.png"
              alt=""
            />
          </div>
        </div>

        <div className="">
          <h1 className="font-bold text-xl mb-5">Company</h1>
          <div className="text-lg leading-9">
            <p>About Us</p>
            <p>Work</p>
            <p>Latest News</p>
            <p>Careers</p>
          </div>
        </div>

        <div className="">
          <h1 className="font-bold text-xl mb-5">Product</h1>
          <div className="text-lg leading-9">
            <p>Prototype</p>
            <p>Plans & Pricing</p>
            <p>Customers</p>
            <p>Integrations</p>
          </div>
        </div>
        <div className="">
          <h1 className="font-bold text-xl mb-5">Support</h1>
          <div className="text-lg leading-9">
            <p>Help Desk</p>
            <p>Sales</p>
            <p>Become a Partner</p>
            <p>Developers</p>
          </div>
        </div>
        <div className="">
          <h1 className="font-bold text-xl mb-5">Contact</h1>
          <div className="text-lg leading-9">
            <p>524 Broadway , NYC</p>
            <p>+1 777 - 978 - 5570</p>
          </div>
        </div>
      </div>
      <hr className="w-[90%] m-auto mb-5" />
      <div className="flex justify-between px-20 pb-10">
        <p>@2023 WowJobs. All Rights Reserved</p>
        <p>Powered by CareerHub</p>
      </div>
    </div>
  );
};

export default Footer;
