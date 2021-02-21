import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

const QueryPosts = gql`
  query {
    querypost {
      id
      title
      tags
    }
  }
`;
export const HomeContainer = () => {
  const { loading, error, data } = useQuery(QueryPosts);
  const router = useRouter();

  const handleClick = (id, title) => {
    router.push({ pathname: `/posts/${title}`, query: { id } });
  };
  if (loading) return <p>'Loading...'</p>;
  if (error) return <p>Error! ${error.message}</p>;
  return (
    <div className="flex flex-col items-center">
      {data.querypost.map((post) => {
        return (
          <div key={post.id} className="w-1/3 m-1.5 bg-white rounded flex">
            <img
              src="https://image.yangchenhui.xin/blog/tree-5319431_1920.jpg"
              alt="postImg"
              className="w-1/3 rounded cursor-pointer"
              onClick={() => handleClick(post.id, post.title)}
            />
            <div className="p-4">
              <div
                className="font-bold text-2xl cursor-pointer"
                onClick={() => handleClick(post.id, post.title)}
              >
                {post.title}
              </div>
              <div className="flex space-x-2 text-xs">
                {post.tags.map((tag, index) => {
                  return <span key={index}>{tag}</span>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
