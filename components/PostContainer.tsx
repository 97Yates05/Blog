import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

const GetPost = gql`
  query post($id: ID!) {
    getpost(id: $id) {
      title
      tags
      text
    }
  }
`;

export default () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GetPost, { variables: { id } });

  if (loading) return <p>'Loading...'</p>;
  if (error) return <p>Error! ${error.message}</p>;
  return (
    <div className="flex flex-col items-center">
      <img
        src="https://image.yangchenhui.xin/blog/tree-5319431_1920.jpg"
        alt="postImg"
        className="w-1/2 rounded"
      />
      <div className="text-2xl font-bold">{data.getpost.title}</div>
      <div>
        {data.getpost.tags.map((tag) => {
          return <span>{tag}</span>;
        })}
      </div>
      <div className="w-1/2">{data.getpost.text}</div>
    </div>
  );
};
