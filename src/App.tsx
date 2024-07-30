import { useQuery } from "@tanstack/react-query";
import { useUserStore } from "./state/userState";
import { getUsers } from "./api/user";

export default function App() {
  const { filters } = useUserStore();

  const { data } = useQuery({
    queryKey: ['users', filters],
    queryFn: () => getUsers(filters),
  });

  return (
    <div>
      <FiltersComponent />
      {data?.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
}

function FiltersComponent() {
  const { setFilters } = useUserStore();

  // Imagine some form inputs here
  // that set the filters
  // and call
  // setFilters({ limit: 10, page:
  // 1 });
    

  return null;
}