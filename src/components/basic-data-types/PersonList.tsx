import { Name } from "./Person.types";

type PeronsListProps = {
  names: Name[];
};

export const PersonList = (props: PeronsListProps) => {
  return (
    <>
      {props.names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        );
      })}{' '}
    </>
  );
};
