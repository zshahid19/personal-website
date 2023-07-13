import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Post from "@layouts/components/Post";
import { getSinglePage } from "@lib/contentParser";
import { getTaxonomy } from "@lib/taxonomyParser";
import { sortByDate } from "@lib/utils/sortFunctions";
import { slugify } from "@lib/utils/textConverter";
import { useRouter } from "next/router";

const { blog_folder } = config.settings;

const Category = ({ posts, slug }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Base>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="mx-auto lg:col-10">
              <h1 className="text-center capitalize">{slug}</h1>
              <div className="row pt-12">
                {posts.map((post, i) => (
                  <Post className="mb-6 sm:col-6" key={"key-" + i} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Category;

export const getStaticPaths = () => {
  const allCategory = getTaxonomy(`content/${blog_folder}`, "categories");
  const paths = allCategory.map((category) => ({
    params: {
      category: slugify(category), // Replace spaces with dashes in category parameter
    },
  }));

  return {
    paths,
    fallback: true, // Set fallback to true to allow fallback rendering
  };
};

export const getStaticProps = async ({ params }) => {
  const posts = getSinglePage(`content/${blog_folder}`);
  const filteredPosts = posts.filter((post) =>
    post.frontmatter.categories.find((category) =>
      slugify(category).includes(params.category)
    )
  );

  const sortedPosts = sortByDate(filteredPosts);

  return {
    props: {
      posts: filteredPosts,
      slug: params.category.replace(/-/g, " "), // Replace dashes with spaces in slug prop
    },
  };
};
