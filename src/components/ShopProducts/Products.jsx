import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Pagination from "./Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSquare } from "@fortawesome/free-solid-svg-icons";


const Products = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false); // Ensure loading state is set to false in case of an error
      }
    };
    fetchPosts();
  }, []);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className="text-lg font-semibold border-b-2 border-b-gray-300 mb-10">
        <div className="flex items-center justify-between">
          <h3 className="text-sm text-gray-400">
            Showing {postsPerPage} results of {posts.length}
          </h3>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <h2 className="text-base">Sort By:</h2>
              <select
                name="select"
                className="border border-gray-500 rounded-full px-5 py-1 outline-none"
              >
                <option value="price">Price</option>
              </select>
            </div>
            <FontAwesomeIcon
              icon={faSquare}
              className="text-3xl cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faList}
              className="text-3xl cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div>
        <ProductItem />

        <>
          {currentPosts.map((data, index) => (
            <div className="list" key={index}>
              <p>{data.title}</p>
            </div>
          ))}
        </>

        <Pagination
          currentPage={currentPage}
          length={posts.length}
          postsPerPage={postsPerPage}
          handlePagination={handlePagination}
        />
      </div>
    </div>
  );
};

export default Products;
