import type {
  EnhanceApiFn,
  EnhanceApiReq,
  EnhanceApiRes,
} from "@enhance/types";

type Todo = {
  title: string;
  completed?: boolean;
};

export const get: EnhanceApiFn = async function (
  request: EnhanceApiReq,
): Promise<EnhanceApiRes> {
  console.log(`Handling ${request.path}...`);

  const todos: Todo[] = [
    { title: "todo 1", completed: false },
    { title: "todo 2", completed: true },
    { title: "todo 3" },
  ];

  const response: EnhanceApiRes = {
    json: { todos },
  };

  return response;
};
