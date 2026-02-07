import { Link } from 'react-router-dom';

export function Accessibility() {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Accessibility Statement</h1>
        <p className="text-lg text-gray-600 mb-12">Updated: June 2020</p>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-3">New Feature - Screen Reader Compatible Version</h2>
            <p className="text-gray-700 mb-0">
              We're excited to announce a new feature designed to make it much easier for people using screen readers to utilize our site. Please{' '}
              <a href="/" className="text-blue-600 hover:underline font-medium">
                click here for our screen reader version
              </a>.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">General</h2>
          <p className="text-gray-700 mb-6">
            We strive to ensure that our services are accessible to people with disabilities. We have invested a significant amount of resources to help ensure that this website is made easier to use and more accessible for people with disabilities, with the strong belief that every person has the right to live with dignity, equality, comfort and independence.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Accessibility on our Website</h2>
          <p className="text-gray-700 mb-6">
            In addition to the Screen Reader Compatible version of our website, we make available the UserWay Website Accessibility Widget that is powered by a dedicated accessibility server. The software allows us to improve our compliance with the Web Content Accessibility Guidelines (WCAG 2.1).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Enabling the Accessibility Menu</h2>
          <p className="text-gray-700 mb-6">
            Our accessibility menu can be enabled by clicking the accessibility menu icon that appears on the corner of the page. After triggering the accessibility menu, please wait a moment for the accessibility menu to load in its entirety.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Disclaimer</h2>
          <p className="text-gray-700 mb-6">
            We will continue our efforts to constantly improve the accessibility of our site and services in the belief that it is our collective moral obligation to allow seamless, accessible and unhindered use also for those of us with disabilities.
          </p>
          <p className="text-gray-700 mb-6">
            Despite our efforts to make all pages and content on this website fully accessible, some content may not have yet been fully adapted to the strictest accessibility standards. This may be a result of not having found or identified the most appropriate technological solution.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Here For You</h2>
          <p className="text-gray-700 mb-6">
            If you are experiencing difficulty with any content on this site or require assistance with any part of our site, please contact us during normal business hours as detailed below and we will be happy to assist.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you wish to report an accessibility issue, have any questions or need assistance, please contact our Customer Support as follows:
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mt-6">
            <p className="text-center mb-0">
              <Link
                to="/contact" 
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Click Here to Contact Us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}