import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useEffect, useRef } from 'react';
import Editor from 'vditor';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(() => (id ? `/api/posts/${id}` : null));
  const container = useRef(null);

  useEffect(() => {
    if (data) {
      Editor.md2html(data.content).then((value) => {
        container.current.innerHTML = value;
      });
    }
  }, [data, container]);

  if (!data) return <p>'Loading...'</p>;
  if (error) return <p>Error! ${error.message}</p>;
  return (
    <div className="flex flex-col items-center">
      <img src={data.cover} alt="postImg" className="w-1/2 rounded" />
      <div className="mt-4 space-y-2.5">
        <div className="text-3xl font-bold">{data.title}</div>
        <div className="flex space-x-2 text-xs">
          {data.tags.map((tag, index) => {
            return <span key={index}>{tag}</span>;
          })}
        </div>
      </div>
      <div id="write" className="w-1/2 prose prose-red" ref={container} />
    </div>
  );
};
export default Post;
