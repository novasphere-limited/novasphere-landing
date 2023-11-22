import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { dummyBlogPostData } from "@/contants";
import Layout from "@/components/Layout";
import Subscribe from "@/components/Subscribe";
import ContactSection from "@/components/ContactSection";

export default function InnerBlogPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Layout>
        <div className="inner-blog-bg_img flex items-center justify-center h-[50vh]">
          <div>
            <h2 className="header-2_medium mb-4">
              We help give the perfect solution to your Business
            </h2>
            <div className="flex justify-center items-center gap-1">
              <Image
                src="/asset/profile.png"
                alt="Profile"
                width={28}
                height={28}
                className="rounded-md"
              />
              <p className="text-2_medium">Admin John</p>
              <Image
                src="/asset/calender.png"
                alt="calender"
                width={24}
                height={24}
                className="rounded-md"
              />
              <p className="text-2_medium">13, February 2023</p>
            </div>
          </div>
        </div>
        <div className="main-container">
          <p className="text-1_regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborumLorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </p>

          <div>
            <h4 className="header-4_medium mb-3 me-3">Featured Post</h4>
            {dummyBlogPostData.map((blog) => (
              <div
                className="blog-post_grid2 rounded-md shadow-md p-3 mb-4"
                key={blog.id}
              >
                <div>
                  <Image
                    src={blog.imagePath}
                    alt={blog.name}
                    width={409}
                    height={333}
                    className="rounded-md w-full"
                  />
                </div>
                <div>
                  <h3 className="header-3_bold mb-3">{blog.title}</h3>
                  <p className="text-2_regular mb-2">{blog.content}</p>
                  <Link
                    href={`/blog/${blog.id}`}
                    className="text-1_medium text-warning500"
                  >
                    Read more
                  </Link>
                  <p className="text-2_bold mt-3">{blog.name}</p>
                  <p className="text-3_regular">13, February 2023</p>
                </div>
              </div>
            ))}
          </div>
          <h6 className="label-2_medium">Leave a Comment</h6>
          <p className="text-2_regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
          <form>
            <textarea
              placeholder="Leave your comment here"
              className="p-3 w-full mb-2 border-2 mt-2 rounded-md"
              style={{ minHeight: "200px" }}
            ></textarea>
            <div className="mt-3">
              <label className="label-2_medium">Name</label>
              <input
                type="text"
                placeholder="Your name..."
                className="p-3 w-full mb-5 border-2 rounded-md mt-2"
              />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="w-3/4 btn-nova_bg ">
                Post Comment
              </button>
            </div>
          </form>
        </div>
        <ContactSection />
        <Subscribe />
      </Layout>
    </div>
  );
}
