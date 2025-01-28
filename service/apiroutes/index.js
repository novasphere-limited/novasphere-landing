export const routes = {
  getBlogs: (data) => {
    const params = new URLSearchParams(data);
    return `/payymenow/utils/blogs?${params}`;
  },
  getBlog: (id) => `/payymenow/utils/get-blog-id/${id}`,
  getFAQs: (data) => {
    const params = new URLSearchParams(data);
    return `/payymenow/utils/faqs?${params}`;
  },
  getFaq: (id) => `/payymenow/utils/get-faq-by-id/${id}`,
  getFeaturedIns: (data) => {
    const params = new URLSearchParams(data);
    return `/payymenow/utils/features?${params}`;
  },
  getFeaturedIn: (id) => `/payymenow/utils/get-feature-id/${id}`,
};
