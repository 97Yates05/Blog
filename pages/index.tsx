import useSWR from 'swr';
import { useRouter } from 'next/router';

export default function Home() {
  const { data, error } = useSWR('/api/posts');
  const router = useRouter();

  const handleClick = async (id, title) => {
    try {
      await router.push({ pathname: `/posts/${title}`, query: { id } });
    } catch (e) {
      console.log(e);
    }
  };
  if (!data) return <p>'Loading...'</p>;
  if (error) return <p>Error! ${error.message}</p>;
  return (
    <div className="flex flex-col items-center space-y-6 py-4">
      {data.map((post) => {
        return (
          <div key={post.id} className="w-1/3 bg-white rounded flex">
            <img
              src={post.cover}
              alt="postCover"
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
}
