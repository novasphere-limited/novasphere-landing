import { dummyBlogPostData } from "@/contants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LatestBlogPost() {
  return (
    <div className="main-container">
      <h4 className="header-4_medium mb-3">Latest Post</h4>
      <div>
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
    </div>
  );
}
