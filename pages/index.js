import React from 'react';
import config from '@config/config.json';
import social from '@config/social.json';
import Base from '@layouts/Baseof';
import ImageFallback from '@layouts/components/ImageFallback';
import Pagination from '@layouts/components/Pagination';
import Post from '@layouts/components/Post';
import Social from '@layouts/components/Social';
import Link from 'next/link';
import Portfolio from '@layouts/components/Portfolio';
import jobExperienceData from '@config/jobExperience.json';
import educationData from '@config/education.json';
import { getSinglePage } from '@lib/contentParser';
import { sortByDate } from '@lib/utils/sortFunctions';
const { blog_folder } = config.settings

const Home = ({ posts }) => {
  const { pagination } = config.settings;
  const { name, image, designation, bio, resume } = config.profile;
  const sortPostByDate = sortByDate(posts);

  const bounceAnimation = `
    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0);
      }
    }
  `;

  const ResumeLink = () => (
    <Link
      href={'/../public/pdf/7-10-2023-Zaid-Shahid-Resume.pdf'}
      style={{
        fontSize: '1rem',
        color: '#ED6A5A',
        transition: 'transform 0.3s',
        display: 'inline-block',
        transform: 'scale(1)',
      }}
      onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
      onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
    >
      {resume}
    </Link>
  );

  const animatedName = name.split('').map((letter, index) => (
    <span key={index} style={{ animation: 'bounce 0.5s infinite alternate' }}>
      {letter}
    </span>
  ));

  return (
    <Base>
      <style>{bounceAnimation}</style>
      {/* profile */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="mx-auto text-center lg:col-8">
              <ImageFallback
                className="mx-auto rounded-full"
                src={image}
                width={220}
                height={220}
                priority={true}
                alt={name}
              />
              <h1 className="mt-12 text-6xl lg:text-8xl font-semibold">
                {animatedName}{' '}
              </h1>
              <p className="mt-9 text-primary text-xl">{designation}</p>
              <p className="mt-4 leading-9 text-xl">{bio}</p>
              <ResumeLink />
              <Social source={social} className="profile-social-icons mt-8" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Portfolio jobExperience={jobExperienceData} education={educationData} />
      </div>

      {/* posts */}
      <div className="pt-4">
        <div className="container">
          <div className="row">
            <div className="mx-auto lg:col-10">
              <h2 className="text-center text-3xl font-semibold mb-4">
                Recent Posts
              </h2>
              <div className="row">
                {sortPostByDate.slice(0, pagination).map((post, i) => (
                  <Post
                    className="col-12 mb-6 sm:col-6"
                    key={'key-' + i}
                    post={post}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12">
            <Pagination
              totalPages={Math.ceil(posts.length / pagination)}
              currentPage={1}
            />
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const posts = getSinglePage(`content/${blog_folder}`);
  return {
    props: {
      posts: posts,
    },
  };
};
