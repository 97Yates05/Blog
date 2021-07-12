import { useRouter } from 'next/router';
import Editor from 'vditor';
import { useRef } from 'react';

const PostContainer = () => {
  const router = useRouter();
  const { id } = router.query;
  const container = useRef(null);
  const loading = true;
  const error = null;
  const data = null;
  if (loading) return <p>'Loading...'</p>;
  if (data) {
    Editor.md2html(data.getPost.text).then((value) => {
      container.current.innerHTML = value;
    });
  }
  if (error) return <p>Error! ${error.message}</p>;
  return (
    <div className="flex flex-col items-center">
      <img src={data.getPost.cover} alt="postImg" className="w-1/2 rounded" />
      <div className="mt-4 space-y-2.5">
        <div className="text-3xl font-bold">{data.getPost.title}</div>
        <div className="flex space-x-2 text-xs">
          {data.getPost.tags.map((tag, index) => {
            return <span key={index}>{tag}</span>;
          })}
        </div>
      </div>
      <div id="write" className="w-1/2 prose prose-red" ref={container} />
    </div>
  );
};
export default PostContainer;
