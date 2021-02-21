import { gql, useQuery } from '@apollo/client';

const QueryPost = gql`
  query {
    querypost {
      id
      title
    }
  }
`;
export const HomeContainer = () => {
  const { loading, error, data } = useQuery(QueryPost);
  console.log(data);
  if (loading) return <p>'Loading...'</p>;
  if (error) return <p>Error! ${error.message}</p>;
  return (
    <div className="flex flex-col items-center">
      {data.querypost.map((value) => {
        return (
          <div key={value.id} className="w-1/3 m-1.5 bg-white rounded flex">
            <img
              src="https://image.yangchenhui.xin/blog/tree-5319431_1920.jpg"
              alt="postImg"
              className="w-1/3 rounded"
            />
            <div>{value.title}</div>
          </div>
        );
      })}
    </div>
  );
};
