import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <footer className="relative bg-green-900 pt-8 pb-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-left lg:text-left">
              <div className="w-full lg:w-6/12 px-4">
                <h4 className="text-3xl font-semibold text-white">
                  Let's keep in touch!
                </h4>
                <h5 className="text-lg mt-0 mb-2 text-white">
                  Find us on any of these platforms, we respond in 1-2 business days.
                </h5>
                <div className="mt-6 lg:mb-0 mb-6">
                  <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i className="fab fa-facebook-square"></i>
                  </button>
                  <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i className="fab fa-dribbble"></i>
                  </button>
                  <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i className="fab fa-github"></i>
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-full lg:w-4/12 px-4 ml-auto">
                    <span className="block uppercase text-white text-sm font-semibold mb-2">Useful Links</span>
                    <ul className="list-unstyled">
                      <li>
                        <a className="text-white hover:text-gray-300 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
                      </li>
                      <li>
                        <a className="text-white hover:text-gray-300 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
                      </li>
                      <li>
                        <a className="text-white hover:text-gray-300 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
                      </li>
                      <li>
                        <a className="text-white hover:text-gray-300 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <span className="block uppercase text-white text-sm font-semibold mb-2">Other Resources</span>
                    <ul className="list-unstyled">
                      <li>
                        <a className="text-white hover:text-gray-300 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
                      </li>
                      <li>
                        <a className="text-white hover:text-gray-300 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a className="text-white hover:text-gray-300 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                      </li>
                      <li>
                        <a className="text-white hover:text-gray-300 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-6 border-blueGray-300"/>
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-white font-semibold py-1">
                  Copyright © <span id="get-current-year">2024</span>
                  <a href="https://www.creative-tim.com/product/notus-js" className="text-white hover:text-gray-300" target="_blank"> ECODEVS by</a>
                  <a href="https://www.creative-tim.com?ref=njs-profile" className="text-white hover:text-gray-300"> Ecodevs Tim</a>.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section``;

export default Footer;
